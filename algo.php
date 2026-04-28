<?php

namespace App\Http\Middleware;

use App\Services\UserIdentityService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class InjectUserData
{
    protected UserIdentityService $identityService;

    public function __construct(UserIdentityService $identityService)
    {
        $this->identityService = $identityService;
    }

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $this->identityService->findUserFromHash($request);

        if (! $user) {
            return $next($request);
        }

        $email = strtolower(preg_replace('/\s+/', '', $user->email));
        $hashedEmail = hash('sha256', $email);
        view()->share('userEmail', $hashedEmail);

        return $next($request);
    }
}




<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;

class UserIdentityService
{
    public function findUserFromHash(Request $request): ?User
    {
        // En entorno local saltamos toda la lógica del hash
        if (app()->environment('local')) {
            return $request->user();
        }

        $hash = $request->cookie('user_hash');

        if (! $hash) {
            Log::warning('UserIdentityService: Missing user_hash.', [
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'url' => $request->fullUrl(),
                'method' => $request->method(),
                'headers' => $request->headers->all(),
                'input' => $request->except(['password', 'token']),
                'type' => 'mind_session_error',
            ]);

            $this->forceLogout($request);

            return null;
        }

        $user = User::where('email_identity_hash', $hash)->first();

        if (! $user) {
            Log::critical('UserIdentityService: User with user_hash not found.', [
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'url' => $request->fullUrl(),
                'method' => $request->method(),
                'headers' => $request->headers->all(),
                'input' => $request->except(['password', 'token']),
                'type' => 'mind_session_error',
                'hash' => $hash,
            ]);

            $this->forceLogout($request);

            return null;
        }

        $authenticatedUser = $request->user();

        if (! $authenticatedUser || $authenticatedUser->id !== $user->id) {
            Log::critical('UserIdentityService: User and hash do not match.', [
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'url' => $request->fullUrl(),
                'method' => $request->method(),
                'headers' => $request->headers->all(),
                'input' => $request->except(['password', 'token']),
                'hash' => $hash,
                'user_id' => $user->id,
                'type' => 'mind_session_error',
            ]);

            $this->forceLogout($request);

            return null;
        }

        return $user;
    }

    protected function forceLogout(Request $request): void
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        Cookie::queue(Cookie::forget('user_hash'));
    }
}