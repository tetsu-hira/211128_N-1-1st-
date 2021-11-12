<?php
declare(strict_types=1);

namespace App\Http\Actions;

use illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Http\Controllers\Controller;

use App\Domain\AddJsonDomain AS Domain;
use App\Http\Responders\AddJsonResponder AS Responder;

class AddJsonAction extends Controller
{
  protected $Domain;
  protected $Responder;

  public function __construct(Request $request)
  {
    // $this->Domain   = $Domain;
    // $this->Responder  = $Responder;
    logger($request);
    $this->middleware('JpJsonResponse');
  }

  /**
   * @param Request $request
   * @return  JsonResponse
   */
  public function __invoke(Request $request): JsonResponse
  {
    logger($request);
    return $this->Responder->response(
      $this->Domain->add($request)
    );
  }
}