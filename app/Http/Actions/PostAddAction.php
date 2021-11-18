<?php
declare(strict_types=1);

namespace App\Http\Actions;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Http\Controllers\Controller;

use App\Domain\PostAddDomain AS Domain;
use App\Http\Responders\PostAddResponder AS Responder;

class PostAddAction extends Controller
{
  protected $Domain;
  protected $Responder;


  public function __construct(Domain $Domain, Responder $Responder)
  {
    $this->Domain   = $Domain;
    $this->Responder  = $Responder;
    $this->middleware('JpJsonResponse');
  }

  /**
   * @param Request $request
   * @return  JsonResponse
   */
  public function __invoke(Request $request): JsonResponse
  {
    return $this->Responder->response(
      $this->Domain->get($request)
    );
  }
}