export default function Landing() {
  return (
    <main class="grid-block col main main-landing">
      <section class="grid-block justify-center section section-intro">
        <div class="text-container">
          <h1 class="h1 weight-bold">Heya, I’m Tony.</h1>
          <h1 class="h1 weight-bold">I work on <strong class="the-web"><span class="span" data-text="the web">the web</span></strong> & here’s some of what I’ve been up to:</h1>
        </div>
      </section>
      <div class="grid-block section-card-wrapper">
        <section class="section-card section-runnable">
          <h2 class="h2 weight-bold">Runnable</h2>
          <p class="p">Automatically launching full-stack environments for every branch.</p>
          <div class="grid-block margin-top-md btn-wrapper">
            <a class="btn btn-md btn-white" href="/runnable/">Read Details</a>
            <a class="btn btn-md btn-white-outline" href="//runnable.com/landing"><span class="span">View It Live</span></a>
          </div>
          <img class="img" src="/images/runnable/dockerfile.png" alt="" />
        </section>
        <section class="section-card section-notorious">
          <h2 class="h2 weight-bold">Notorious A.P.I.</h2>
          <p class="p">API response codes and latency represented in visual and audio form.</p>
          <div class="grid-block margin-top-md btn-wrapper">
            <a class="btn btn-md btn-white" href="/notoriousapi/">Read Details</a>
            <a class="btn btn-md btn-white-outline" href="//mulesoft-labs.github.io/notoriousapi/"><span class="span">View It Live</span></a>
          </div>
        </section>
        <section class="section-card section-codesnippets">
          <h2 class="h2 weight-bold">CodeSnippets</h2>
          <p class="p">Complete environments to run and share code in the browser.</p>
          <div class="grid-block margin-top-md btn-wrapper">
            <a class="btn btn-md btn-white" href="/codesnippets/"><span class="span">Read Details</span></a>
          </div>
          <img class="img no-shadow" src="/images/codesnippets.svg" alt="" />
        </section>
        <section class="section-card section-mulequest">
          <h2 class="h2 weight-bold">MuleQuest</h2>
          <p class="p">Introducing users to a new product with a game.</p>
          <div class="grid-block margin-top-md btn-wrapper">
            <a class="btn btn-md btn-white" href="/mulequest/"><span class="span">Read Details</span></a>
          </div>
          <img class="img no-shadow" src="/images/mulequest.gif" alt="" />
        </section>
      </div>
      <section class="section padding-top-none section-more">
        <ol class="grid-block list section-card-wrapper">
          <li class="grid-block col section-card li">
            <img class="margin-bottom-sm" src="/images/slash-docker.svg" height="56" width="70" alt="" />
            <p class="p weight-bold">/docker</p>
            <p class="p">A resource for developers learning Docker and containerization.</p>
            <div class="grid-block shrink margin-top-sm btn-wrapper">
              <a class="btn btn-sm btn-blue-outline" href="//github.com/runnable/slash-docker">View Source</a>
              <a class="btn btn-sm btn-blue-outline" href="//runnable.com/docker/"><span class="span">View It Live</span></a>
            </div>
          </li>
          <li class="grid-block col section-card li">
            <img class="margin-bottom-sm" src="/images/file-docs.svg" height="56" width="70" alt="" />
            <p class="p weight-bold">Runnable Docs</p>
            <p class="p">Documentation for getting start with, and troubleshooting Runnable.</p>
            <div class="grid-block shrink margin-top-sm btn-wrapper">
              <a class="btn btn-sm btn-blue-outline" href="//github.com/runnable/docs">View Source</a>
              <a class="btn btn-sm btn-blue-outline" href="//runnable.com/docs/"><span class="span">View It Live</span></a>
            </div>
          </li>
          <li class="grid-block col section-card li">
            <img class="margin-bottom-sm" src="/images/co2flights.png" height="56" width="70" alt="" />
            <p class="p weight-bold">CO<sup>2</sup> Flight Calculator</p>
            <p class="p">A simple way to calculate the CO<sup>2</sup> cost of a flight.</p>
            <div class="grid-block shrink margin-top-sm btn-wrapper">
              <a class="btn btn-sm btn-blue-outline" href="//github.com/runnabro/offset">View Source</a>
              <a class="btn btn-sm btn-blue-outline" href="//ohgodhelp.us/"><span class="span">View It Live</span></a>
            </div>
          </li>
        </ol>
      </section>
      <footer class="grid-block justify-center footer">
        <a class="link-icon" href="//github.com/runnabro/">
          @@include('images/github.svg')
        </a>
      </footer>
    </main>
  );
}
