<?php

namespace App\Http\Actions;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

use App\Domain\SampleIndexDomain AS Domain;

use App\Http\Responders\SampleIndexResponder AS Responder;

class SampleIndexAction extends Controller
{
  protected $Domain;
  protected $Responder;

  public function __construct(
    Domain $Domain,
    Responder $Responder
  )
  {
    $this->Domain = $Domain;
    $this->Responder = $Responder;
  }

  public function __invoke(Request $request): Response
  {
    return $this->Responder->response(
      $this->Domain->get()
    );
  }
}