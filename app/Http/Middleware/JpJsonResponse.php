<?php

namespace App\Http\Middleware;

use Closure;
use Symfony\Component\HttpFoundation\JsonResponse;
use Illuminate\Http\Request;

class JpJsonResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
      $response = $next($request);

      if (!$response instanceof JsonResponse) {
        return $response;
      }

      $response->setEncodingOptions($response->getEncodingOptions() | JSON_UNESCAPED_UNICODE);

      return $response;
    }
}
