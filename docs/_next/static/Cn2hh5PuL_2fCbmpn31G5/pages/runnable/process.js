(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "W7t/":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/runnable/process", function() {
      var mod = __webpack_require__("qk4j")
      if(false) {}
      return mod
    }]);
  

/***/ }),

/***/ "qk4j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RunnableProcess; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8Kt/");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5Yp1");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function RunnableProcess() {
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Hey, tell me about Runnable.")), __jsx("main", {
    className: "grid-block col main"
  }, __jsx("article", {
    className: "article article-runnable"
  }, __jsx("section", {
    className: "grid-block col section text-container"
  }, __jsx("h2", {
    className: "h2"
  }, "The Design Process"), __jsx("h2", {
    className: "h2"
  }, "Spec Review"), __jsx("p", {
    className: "p"
  }, "Our product manager wrote a ", __jsx("a", {
    className: "link",
    href: "//runnable.atlassian.net/wiki/display/GOT/Spec%3A+Auto-launch+branch+environments+from+other+repositories+in+the+compose+file"
  }, __jsx("span", {
    className: "span"
  }, "spec")), " based on feedback we were receiving from clients who were having issues setting up Runnable within their organizations. The ability to launch environments across different repositories from a single Compose file is a feature that our clients have requested. Our design team usually gets involved here. We help define specs by writing or expanding on the initial draft, collecting data, and writing proposals."), __jsx("h2", {
    className: "h2"
  }, "What went wrong?"), __jsx("p", {
    className: "p"
  }, "We always imagined that our product could be enjoyed by everyone at an organization. We assumed that if a developer were working on a project, they would have full access to their code. But our clients had DevOps engineers configure their environments, and they did not always have  access to the code base for the projects that developers were working on. So in order to get set up, they would need to do two things:"), __jsx("ol", {
    className: "ol"
  }, __jsx("li", {
    className: "li"
  }, "Maintain ", __jsx("strong", {
    className: "weight-strong"
  }, "Compose files"), " per project."), __jsx("li", {
    className: "li"
  }, "And convince project leads to add a configuration file to their repositories.")), __jsx("p", {
    className: "text-container p"
  }, "We found there wasn\u2019t a standard practice for where teams should keep their Compose files. There were two primary methods: keep your files in the same repository, or keep your DevOps files separate. Our current product implementation allowed for the first, but not the latter. We needed a way for our product to work for both methods.")), __jsx("section", {
    className: "grid-block col section text-container"
  }, __jsx("h2", {
    className: "h2"
  }, "Pen, Whiteboards, Sketch \uD83D\uDC8E"), __jsx("p", {
    className: "p"
  }, "Starting with pen & paper allows me the freedom to explore solutions at a rapid pace. I\u2019m never afraid of trying \u201Cdumb\u201D ideas, because my sketchbook is a personal format."), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img",
    src: "/images/runnable/process/pen-1.jpg"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "What it might look like for users to choose Compose files.")), __jsx("p", {
    className: "p"
  }, "Once we have working ideas to share, we\u2019ll call our first design critique. Having a whiteboard critique promotes feedback: participants are less shy when discussing work that\u2019s obviously unfinished, and anyone can easily add to or modify work on a whiteboard."), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img",
    src: "/images/runnable/process/whiteboard-1.jpg"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "A slightly more refined version of the previous sketches for critique.")), __jsx("p", {
    className: "p"
  }, "After incorporating feedback from our critique, we\u2019ll share wireframes with the team in a Google Drawing. The drawings are meant to help our engineers understand how the feature should work, and for everyone to have an easy way to give feedback. In this wireframe, we wanted to show users a preview of their environments before committing to creating the cluster. We also updated our navigation to accomodate the additional environments we\u2019d need to show users."), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img-lg",
    src: "/images/runnable/process/sketch-1.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "Early wireframes we shared with our team.")), __jsx("p", {
    className: "p"
  }, "At this point, we felt that what we had would be too ambitious to implement in time. We ended up splitting this project into 2 iterations. For our first iteration, we would reuse our existing onboarding flow, but keep the updates to our navigation."), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img-lg",
    src: "/images/runnable/process/sketch-2.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "2nd wireframe highlights navigation changes."))), __jsx("section", {
    className: "grid-block col section text-container"
  }, __jsx("h2", {
    className: "h2"
  }, "\uD83C\uDF08 Implementation land."), __jsx("p", {
    className: "p"
  }, "Our designers help write the front-end for our projects. So once we\u2019re all onboard, I\u2019ll task out the design work in the engineering JIRA board. As we work on each task, we use feature flags to toggle UI changes."), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img-lg",
    src: "/images/runnable/process/tasking-1.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "Everything is marked as done \u2018cause I took this screenshot after we finished.")), __jsx("p", {
    className: "text-container p"
  }, "Users add their Compose file the same way they did before; but now, we\u2019ll parse their Compose file for references to other GitHub repositories and launch environments from those repositories as well."), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img",
    src: "/images/runnable/process/screenie-1.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "Adding a Compose file.")), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img",
    src: "/images/runnable/process/screenie-2.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "Updated navigation element accomodates multiple environments.")), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img",
    src: "/images/runnable/process/screenie-3.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "Notification system so users know if an environment change has been triggered.")), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img",
    src: "/images/runnable/process/screenie-4.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "Deleting is more powerful with multiple webhooks, so the confirmation reflects the magnitude of the action.")), __jsx("p", {
    className: "text-container p"
  }, "We\u2019ll write the logic for actions, loading states, etc. before testing our UI changes. Then we\u2019ll create a QA checklist that our engineers use as a guide for writing their own tasks and later for bug bashes. We\u2019ll also add handlers for any events that need to be pushed to our analytics setup in MixPanel and setup UserTesting tests."), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img-lg",
    src: "/images/runnable/process/data-1.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "I didn\u2019t manage to grab a more recent onboarding funnel, but overall they tend to look something like this.")), __jsx("figure", {
    className: "grid-block col align-center figure"
  }, __jsx("img", {
    className: "img-lg",
    src: "/images/runnable/process/data-2.png"
  }), __jsx("figcaption", {
    className: "figcaption"
  }, "A user tester attempting to add their Compose file."))))));
}

/***/ })

},[["W7t/",0,1]]]);