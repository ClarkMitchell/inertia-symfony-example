<?php

namespace App\Controller;

use Clark\Inertia\Inertia;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    private $inertia;

  /**
   * @Route("/", name="index")
   */
  public function index()
  {
    $engine = $this->container->get('twig');
    $inertia = new Inertia($engine);
    $inertia->setRootView('base.html.twig');

    return new Response($inertia->render('Index', []));
  }

  /**
   * @Route("/about", name="about")
   */
  public function about()
  {
    $engine = $this->container->get('twig');
    $inertia = new Inertia($engine);
    $inertia->setRootView('base.html.twig');

    return new Response($inertia->render('About', []));
  }
}
