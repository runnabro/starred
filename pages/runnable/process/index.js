import './../../../css/index.scss'
import Head from 'next/head';
import Layout from '../../../components/Layout.js'

export default function RunnableProcess() {
  return (
    <Layout>
      <Head>
        <title>Hey, tell me about Runnable.</title>
      </Head>
      <main className="grid-block col main">
        <article className="article article-runnable">
          <section className="grid-block col section text-container">
            <h2 className="h2">The Design Process</h2>
            <h2 className="h2">Spec Review</h2>
            <p className="p">Our product manager wrote a <a className="link" href="//runnable.atlassian.net/wiki/display/GOT/Spec%3A+Auto-launch+branch+environments+from+other+repositories+in+the+compose+file"><span className="span">spec</span></a> based on feedback we were receiving from clients who were having issues setting up Runnable within their organizations. The ability to launch environments across different repositories from a single Compose file is a feature that our clients have requested. Our design team usually gets involved here. We help define specs by writing or expanding on the initial draft, collecting data, and writing proposals.</p>
            <h2 className="h2">What went wrong?</h2>
            <p className="p">We always imagined that our product could be enjoyed by everyone at an organization. We assumed that if a developer were working on a project, they would have full access to their code. But our clients had DevOps engineers configure their environments, and they did not always have  access to the code base for the projects that developers were working on. So in order to get set up, they would need to do two things:</p>
              <ol className="ol">
                <li className="li">Maintain <strong className="weight-strong">Compose files</strong> per project.</li>
                <li className="li">And convince project leads to add a configuration file to their repositories.</li>
              </ol>
            <p className="text-container p">We found there wasn’t a standard practice for where teams should keep their Compose files. There were two primary methods: keep your files in the same repository, or keep your DevOps files separate. Our current product implementation allowed for the first, but not the latter. We needed a way for our product to work for both methods.</p>
          </section>
          <section className="grid-block col section text-container">
            <h2 className="h2">Pen, Whiteboards, Sketch 💎</h2>
            <p className="p">Starting with pen & paper allows me the freedom to explore solutions at a rapid pace. I’m never afraid of trying “dumb” ideas, because my sketchbook is a personal format.</p>
            <figure className="grid-block col align-center figure">
              <img className="img" src="/images/runnable/process/pen-1.jpg" />
              <figcaption className="figcaption">What it might look like for users to choose Compose files.</figcaption>
            </figure>
            <p className="p">Once we have working ideas to share, we’ll call our first design critique. Having a whiteboard critique promotes feedback: participants are less shy when discussing work that’s obviously unfinished, and anyone can easily add to or modify work on a whiteboard.</p>
            <figure className="grid-block col align-center figure">
              <img className="img" src="/images/runnable/process/whiteboard-1.jpg" />
              <figcaption className="figcaption">A slightly more refined version of the previous sketches for critique.</figcaption>
            </figure>
            <p className="p">After incorporating feedback from our critique, we’ll share wireframes with the team in a Google Drawing. The drawings are meant to help our engineers understand how the feature should work, and for everyone to have an easy way to give feedback. In this wireframe, we wanted to show users a preview of their environments before committing to creating the cluster. We also updated our navigation to accomodate the additional environments we’d need to show users.</p>
            <figure className="grid-block col align-center figure">
              <img className="img-lg" src="/images/runnable/process/sketch-1.png" />
              <figcaption className="figcaption">Early wireframes we shared with our team.</figcaption>
            </figure>
            <p className="p">At this point, we felt that what we had would be too ambitious to implement in time. We ended up splitting this project into 2 iterations. For our first iteration, we would reuse our existing onboarding flow, but keep the updates to our navigation.</p>
            <figure className="grid-block col align-center figure">
              <img className="img-lg" src="/images/runnable/process/sketch-2.png" />
              <figcaption className="figcaption">2nd wireframe highlights navigation changes.</figcaption>
            </figure>
          </section>
          <section className="grid-block col section text-container">
            <h2 className="h2">🌈 Implementation land.</h2>
            <p className="p">Our designers help write the front-end for our projects. So once we’re all onboard, I’ll task out the design work in the engineering JIRA board. As we work on each task, we use feature flags to toggle UI changes.</p>
            <figure className="grid-block col align-center figure">
              <img className="img-lg" src="/images/runnable/process/tasking-1.png" />
              <figcaption className="figcaption">Everything is marked as done ‘cause I took this screenshot after we finished.</figcaption>
            </figure>
            <p className="text-container p">Users add their Compose file the same way they did before; but now, we’ll parse their Compose file for references to other GitHub repositories and launch environments from those repositories as well.</p>
            <figure className="grid-block col align-center figure">
              <img className="img" src="/images/runnable/process/screenie-1.png" />
              <figcaption className="figcaption">Adding a Compose file.</figcaption>
            </figure>
            <figure className="grid-block col align-center figure">
              <img className="img" src="/images/runnable/process/screenie-2.png" />
              <figcaption className="figcaption">Updated navigation element accomodates multiple environments.</figcaption>
            </figure>
            <figure className="grid-block col align-center figure">
              <img className="img" src="/images/runnable/process/screenie-3.png" />
              <figcaption className="figcaption">Notification system so users know if an environment change has been triggered.</figcaption>
            </figure>
            <figure className="grid-block col align-center figure">
              <img className="img" src="/images/runnable/process/screenie-4.png" />
              <figcaption className="figcaption">Deleting is more powerful with multiple webhooks, so the confirmation reflects the magnitude of the action.</figcaption>
            </figure>
            <p className="text-container p">We’ll write the logic for actions, loading states, etc. before testing our UI changes. Then we’ll create a QA checklist that our engineers use as a guide for writing their own tasks and later for bug bashes. We’ll also add handlers for any events that need to be pushed to our analytics setup in MixPanel and setup UserTesting tests.</p>
            <figure className="grid-block col align-center figure">
              <img className="img-lg" src="/images/runnable/process/data-1.png" />
              <figcaption className="figcaption">I didn’t manage to grab a more recent onboarding funnel, but overall they tend to look something like this.</figcaption>
            </figure>
            <figure className="grid-block col align-center figure">
              <img className="img-lg" src="/images/runnable/process/data-2.png" />
              <figcaption className="figcaption">A user tester attempting to add their Compose file.</figcaption>
            </figure>
          </section>
        </article>
      </main>
    </Layout>
  )
}
