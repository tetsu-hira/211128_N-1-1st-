<?php
declare(strict_types=1);

namespace App\Http\Actions;

use illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Http\Controllers\Controller;

use App\Domain\TeamJsonDomain AS Domain;
use App\Http\Responders\TeamJsonResponder AS Responder;

class TeamJsonAction extends Controller
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
   * @param Request $requeset
   * @return  JsonResponse
   */
  public function __invoke(Request $request): JsonResponse
  {
    return $this->Responder->response(
      $this->Domain->get()
    );
  }
}