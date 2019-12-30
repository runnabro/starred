import './../../../css/index.scss'
import Head from 'next/head';
import Layout from '../../../components/layout.js'

export default function RunnableProcess() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Hey, tell me about Runnable.</title>
      </Head>
      <main class="grid-block col main">
        <article class="article article-runnable">
          <section class="grid-block col section text-container">
            <h2 class="h2">The Design Process</h2>
            <h2 class="h2">Spec Review</h2>
            <p class="p">Our product manager wrote a <a class="link" href="//runnable.atlassian.net/wiki/display/GOT/Spec%3A+Auto-launch+branch+environments+from+other+repositories+in+the+compose+file"><span class="span">spec</span></a> based on feedback we were receiving from clients who were having issues setting up Runnable within their organizations. The ability to launch environments across different repositories from a single Compose file is a feature that our clients have requested. Our design team usually gets involved here. We help define specs by writing or expanding on the initial draft, collecting data, and writing proposals.</p>
            <h2 class="h2">What went wrong?</h2>
            <p class="p">We always imagined that our product could be enjoyed by everyone at an organization. We assumed that if a developer were working on a project, they would have full access to their code. But our clients had DevOps engineers configure their environments, and they did not always have  access to the code base for the projects that developers were working on. So in order to get set up, they would need to do two things:</p>
              <ol class="ol">
                <li class="li">Maintain <strong class="weight-strong">Compose files</strong> per project.</li>
                <li class="li">And convince project leads to add a configuration file to their repositories.</li>
              </ol>
            <p class="text-container p">We found there wasn’t a standard practice for where teams should keep their Compose files. There were two primary methods: keep your files in the same repository, or keep your DevOps files separate. Our current product implementation allowed for the first, but not the latter. We needed a way for our product to work for both methods.</p>
          </section>
          <section class="grid-block col section text-container">
            <h2 class="h2">Pen, Whiteboards, Sketch 💎</h2>
            <p class="p">Starting with pen & paper allows me the freedom to explore solutions at a rapid pace. I’m never afraid of trying “dumb” ideas, because my sketchbook is a personal format.</p>
            <figure class="grid-block col align-center figure">
              <img class="img" src="/images/runnable/process/pen-1.jpg" />
              <figcaption class="figcaption">What it might look like for users to choose Compose files.</figcaption>
            </figure>
            <p class="p">Once we have working ideas to share, we’ll call our first design critique. Having a whiteboard critique promotes feedback: participants are less shy when discussing work that’s obviously unfinished, and anyone can easily add to or modify work on a whiteboard.</p>
            <figure class="grid-block col align-center figure">
              <img class="img" src="/images/runnable/process/whiteboard-1.jpg" />
              <figcaption class="figcaption">A slightly more refined version of the previous sketches for critique.</figcaption>
            </figure>
            <p class="p">After incorporating feedback from our critique, we’ll share wireframes with the team in a Google Drawing. The drawings are meant to help our engineers understand how the feature should work, and for everyone to have an easy way to give feedback. In this wireframe, we wanted to show users a preview of their environments before committing to creating the cluster. We also updated our navigation to accomodate the additional environments we’d need to show users.</p>
            <figure class="grid-block col align-center figure">
              <img class="img-lg" src="/images/runnable/process/sketch-1.png" />
              <figcaption class="figcaption">Early wireframes we shared with our team.</figcaption>
            </figure>
            <p class="p">At this point, we felt that what we had would be too ambitious to implement in time. We ended up splitting this project into 2 iterations. For our first iteration, we would reuse our existing onboarding flow, but keep the updates to our navigation.</p>
            <figure class="grid-block col align-center figure">
              <img class="img-lg" src="/images/runnable/process/sketch-2.png" />
              <figcaption class="figcaption">2nd wireframe highlights navigation changes.</figcaption>
            </figure>
          </section>
          <section class="grid-block col section text-container">
            <h2 class="h2">🌈 Implementation land.</h2>
            <p class="p">Our designers help write the front-end for our projects. So once we’re all onboard, I’ll task out the design work in the engineering JIRA board. As we work on each task, we use feature flags to toggle UI changes.</p>
            <figure class="grid-block col align-center figure">
              <img class="img-lg" src="/images/runnable/process/tasking-1.png" />
              <figcaption class="figcaption">Everything is marked as done ‘cause I took this screenshot after we finished.</figcaption>
            </figure>
            <p class="text-container p">Users add their Compose file the same way they did before; but now, we’ll parse their Compose file for references to other GitHub repositories and launch environments from those repositories as well.</p>
            <figure class="grid-block col align-center figure">
              <img class="img" src="/images/runnable/process/screenie-1.png" />
              <figcaption class="figcaption">Adding a Compose file.</figcaption>
            </figure>
            <figure class="grid-block col align-center figure">
              <img class="img" src="/images/runnable/process/screenie-2.png" />
              <figcaption class="figcaption">Updated navigation element accomodates multiple environments.</figcaption>
            </figure>
            <figure class="grid-block col align-center figure">
              <img class="img" src="/images/runnable/process/screenie-3.png" />
              <figcaption class="figcaption">Notification system so users know if an environment change has been triggered.</figcaption>
            </figure>
            <figure class="grid-block col align-center figure">
              <img class="img" src="/images/runnable/process/screenie-4.png" />
              <figcaption class="figcaption">Deleting is more powerful with multiple webhooks, so the confirmation reflects the magnitude of the action.</figcaption>
            </figure>
            <p class="text-container p">We’ll write the logic for actions, loading states, etc. before testing our UI changes. Then we’ll create a QA checklist that our engineers use as a guide for writing their own tasks and later for bug bashes. We’ll also add handlers for any events that need to be pushed to our analytics setup in MixPanel and setup UserTesting tests.</p>
            <figure class="grid-block col align-center figure">
              <img class="img-lg" src="/images/runnable/process/data-1.png" />
              <figcaption class="figcaption">I didn’t manage to grab a more recent onboarding funnel, but overall they tend to look something like this.</figcaption>
            </figure>
            <figure class="grid-block col align-center figure">
              <img class="img-lg" src="/images/runnable/process/data-2.png" />
              <figcaption class="figcaption">A user tester attempting to add their Compose file.</figcaption>
            </figure>
          </section>
        </article>
      </main>
    </Layout>
  )
}
