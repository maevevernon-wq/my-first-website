/* =====================================================
   MAEVE VERNON PORTFOLIO
   Version 1
===================================================== */


/* -------------------------
   VARIABLES
-------------------------- */

:root {
  --background: #f2f0ea;
  --text: #111111;
  --muted: #686868;
  --line: #b8b6b0;
  --dark: #111111;
  --light: #f2f0ea;
  --accent: #d5d0c6;

  --page-padding: 32px;
  --section-space: 150px;
}


/* -------------------------
   RESET
-------------------------- */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--text);

  font-family:
    Arial,
    Helvetica,
    sans-serif;

  font-size: 16px;
  line-height: 1.45;

  overflow-x: hidden;
}

img {
  display: block;
  width: 100%;
}

button,
a {
  font: inherit;
}

button {
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: var(--text);
  color: var(--background);
}


/* -------------------------
   ACCESSIBILITY
-------------------------- */

a:focus-visible,
button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 5px;
}


/* -------------------------
   HEADER
-------------------------- */

.site-header {
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;

  width: 100%;

  padding:
    24px
    var(--page-padding);

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  mix-blend-mode: difference;
  color: white;

  transition:
    transform 0.35s ease,
    opacity 0.35s ease;
}

.site-header.hidden {
  transform: translateY(-100%);
}

.site-name {
  width: fit-content;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.08em;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 28px;

  font-size: 13px;
}

.desktop-nav a {
  position: relative;
}

.desktop-nav a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -4px;

  width: 100%;
  height: 1px;

  background: currentColor;

  transform: scaleX(0);
  transform-origin: right;

  transition: transform 0.25s ease;
}

.desktop-nav a:hover::after,
.desktop-nav a:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}


/* -------------------------
   MOBILE MENU
-------------------------- */

.menu-button {
  display: none;

  border: 0;
  background: transparent;

  cursor: pointer;

  font-size: 13px;
}

.mobile-menu {
  position: fixed;
  inset: 0;

  z-index: 900;

  display: none;
  flex-direction: column;
  justify-content: flex-end;

  padding: 100px 24px 50px;

  background: var(--dark);
  color: var(--light);
}

.mobile-menu.open {
  display: flex;
}

.mobile-menu a {
  padding: 10px 0;

  font-size: clamp(45px, 13vw, 75px);
  line-height: 1;
  letter-spacing: -0.05em;

  border-bottom: 1px solid #444;
}


/* -------------------------
   GENERAL
-------------------------- */

section {
  padding-left: var(--page-padding);
  padding-right: var(--page-padding);
}

.eyebrow {
  font-size: 11px;
  line-height: 1;

  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.section-heading {
  margin-bottom: 70px;
}

.section-heading h2 {
  margin-top: 24px;

  font-size: clamp(55px, 9vw, 145px);
  font-weight: 400;

  line-height: 0.84;
  letter-spacing: -0.065em;
}


/* -------------------------
   HERO
-------------------------- */

.hero {
  min-height: 100vh;

  padding-top: 125px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-heading h1 {
  margin-top: 18px;

  font-size: clamp(82px, 17.2vw, 275px);
  font-weight: 400;

  line-height: 0.72;
  letter-spacing: -0.085em;
}

.hero-heading h1 span {
  display: block;
}

.hero-layout {
  display: grid;
  grid-template-columns:
    minmax(260px, 0.8fr)
    1.2fr;

  gap: clamp(40px, 7vw, 120px);

  align-items: end;

  margin-top: 100px;
}

.hero-image-wrap {
  width: 100%;
  max-width: 450px;

  overflow: hidden;

  background: #d8d5ce;
}

.hero-image {
  aspect-ratio: 4 / 5;

  object-fit: cover;
  object-position: center;

  filter: grayscale(12%);

  transition:
    transform 0.7s cubic-bezier(.2,.7,.2,1),
    filter 0.4s ease;
}

.hero-image-wrap:hover .hero-image {
  transform: scale(1.025);
  filter: grayscale(0%);
}

.hero-intro {
  max-width: 760px;
}

.hero-copy {
  max-width: 700px;

  font-size: clamp(27px, 3.2vw, 50px);
  line-height: 1.05;
  letter-spacing: -0.035em;
}

.hero-meta {
  margin-top: 45px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 5px 30px;

  color: var(--muted);

  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.text-link {
  display: inline-flex;
  gap: 10px;

  margin-top: 45px;
  padding-bottom: 4px;

  border-bottom: 1px solid currentColor;

  font-size: 13px;

  transition: opacity 0.2s ease;
}

.text-link:hover {
  opacity: 0.5;
}


/* -------------------------
   WORK
-------------------------- */

.work-section {
  padding-top: var(--section-space);
  padding-bottom: var(--section-space);
}

.project-list {
  border-top: 1px solid var(--line);
}

.project {
  border-bottom: 1px solid var(--line);
}

.project-trigger {
  width: 100%;

  display: grid;
  grid-template-columns:
    70px
    minmax(200px, 1fr)
    260px
    40px;

  gap: 20px;
  align-items: center;

  padding: 30px 0;

  border: 0;
  background: transparent;

  text-align: left;

  cursor: pointer;

  transition:
    padding-left 0.25s ease,
    opacity 0.25s ease;
}

.project-trigger:hover {
  padding-left: 10px;
}

.project-number,
.project-type {
  color: var(--muted);

  font-size: 11px;

  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.project-name {
  font-size: clamp(25px, 3vw, 48px);
  line-height: 1;
  letter-spacing: -0.035em;
}

.project-arrow {
  justify-self: end;

  font-size: 24px;

  transition: transform 0.3s ease;
}

.project-trigger[aria-expanded="true"]
.project-arrow {
  transform: rotate(45deg);
}


/* PROJECT EXPANSION */

.project-details {
  display: grid;
  grid-template-rows: 0fr;

  overflow: hidden;

  transition:
    grid-template-rows
    0.5s
    cubic-bezier(.4,0,.2,1);
}

.project.open .project-details {
  grid-template-rows: 1fr;
}

.project-details-inner {
  min-height: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 80px;

  padding: 0 0 0;
}

.project.open .project-details-inner {
  padding: 15px 0 70px;
}

.project-large-stat {
  font-size: clamp(70px, 10vw, 150px);
  line-height: 0.8;
  letter-spacing: -0.07em;
}

.project-large-stat span {
  display: block;

  margin-top: 16px;

  color: var(--muted);

  font-size: 11px;

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-description {
  max-width: 600px;
}

.project-description > p {
  margin-bottom: 20px;

  font-size: clamp(16px, 1.5vw, 20px);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 35px;
}

.project-tags span {
  padding: 7px 12px;

  border: 1px solid var(--line);
  border-radius: 100px;

  font-size: 10px;

  text-transform: uppercase;
  letter-spacing: 0.05em;
}


/* -------------------------
   ABOUT
-------------------------- */

.about-section {
  padding-top: var(--section-space);
  padding-bottom: var(--section-space);

  background: var(--dark);
  color: var(--light);
}

.about-heading h2 {
  max-width: 1200px;
}

.about-grid {
  display: grid;
  grid-template-columns:
    minmax(260px, 0.75fr)
    1.25fr;

  gap: clamp(60px, 10vw, 170px);

  align-items: start;

  margin-top: 120px;
}

.about-image-wrap {
  max-width: 440px;

  overflow: hidden;
}

.about-image {
  aspect-ratio: 4 / 5;

  object-fit: cover;
  object-position: center;

  filter: grayscale(100%);

  transition:
    filter 0.4s ease,
    transform 0.7s ease;
}

.about-image-wrap:hover .about-image {
  filter: grayscale(0%);
  transform: scale(1.02);
}

.about-copy {
  max-width: 800px;
}

.about-lead {
  margin-bottom: 45px;

  font-size: clamp(28px, 3.3vw, 52px);
  line-height: 1.07;
  letter-spacing: -0.04em;
}

.about-copy > p:not(.about-lead) {
  max-width: 640px;

  margin-bottom: 20px;

  color: #b9b9b9;

  font-size: 17px;
}

.about-facts {
  margin-top: 70px;

  border-top: 1px solid #454545;
}

.about-facts div {
  display: grid;
  grid-template-columns: 160px 1fr;

  gap: 20px;

  padding: 14px 0;

  border-bottom: 1px solid #454545;
}

.about-facts span {
  color: #777;

  font-size: 10px;

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.about-facts p {
  font-size: 13px;
}


/* -------------------------
   EXPERIENCE
-------------------------- */

.experience-section {
  padding-top: var(--section-space);
  padding-bottom: var(--section-space);
}

.timeline {
  border-top: 1px solid var(--line);
}

.timeline-item {
  display: grid;

  grid-template-columns:
    180px
    minmax(260px, 1fr)
    1fr;

  gap: 40px;

  padding: 32px 0;

  border-bottom: 1px solid var(--line);
}

.timeline-date {
  color: var(--muted);

  font-size: 11px;

  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-item h3 {
  font-size: clamp(23px, 2.4vw, 38px);
  font-weight: 400;

  line-height: 1;
  letter-spacing: -0.03em;
}

.company {
  margin-top: 8px;

  color: var(--muted);

  font-size: 13px;
}

.timeline-description {
  max-width: 600px;

  color: #333;

  font-size: 15px;
}


/* -------------------------
   SKILLS
-------------------------- */

.skills-section {
  padding-top: 100px;
  padding-bottom: 130px;

  background: var(--accent);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  margin-top: 50px;
}

.skills-list span {
  padding: 13px 20px;

  border: 1px solid var(--text);
  border-radius: 100px;

  font-size: clamp(13px, 1.5vw, 18px);

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.skills-list span:hover {
  background: var(--text);
  color: var(--background);

  transform: translateY(-2px);
}


/* -------------------------
   CONTACT
-------------------------- */

.contact-section {
  min-height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 100px;
  padding-bottom: 70px;

  background: var(--background);
}

.contact-section h2 {
  margin-top: 50px;

  font-size: clamp(80px, 17vw, 265px);
  font-weight: 400;

  line-height: 0.72;
  letter-spacing: -0.085em;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 80px;

  align-items: end;

  margin-top: 100px;
}

.contact-grid > p {
  max-width: 500px;

  font-size: clamp(20px, 2vw, 30px);
  line-height: 1.15;
}

.contact-links {
  display: flex;
  flex-direction: column;
}

.contact-link {
  display: flex;
  justify-content: space-between;

  padding: 15px 0;

  border-top: 1px solid var(--line);

  font-size: 15px;

  transition:
    padding-left 0.25s ease,
    opacity 0.25s ease;
}

.contact-link:last-child {
  border-bottom: 1px solid var(--line);
}

.contact-link:hover {
  padding-left: 10px;
  opacity: 0.55;
}


/* -------------------------
   FOOTER
-------------------------- */

.site-footer {
  display: grid;
  grid-template-columns: 1fr 1fr auto;

  gap: 30px;

  padding:
    22px
    var(--page-padding);

  border-top: 1px solid var(--line);

  font-size: 10px;

  text-transform: uppercase;
  letter-spacing: 0.06em;
}


/* -------------------------
   REVEAL ANIMATION
-------------------------- */

.reveal {
  opacity: 0;
  transform: translateY(25px);

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}


/* -------------------------
   TABLET
-------------------------- */

@media (max-width: 950px) {

  :root {
    --page-padding: 24px;
    --section-space: 110px;
  }

  .hero-layout {
    grid-template-columns: 0.8fr 1fr;
    gap: 50px;
  }

  .project-trigger {
    grid-template-columns:
      45px
      1fr
      170px
      30px;
  }

  .project-details-inner {
    gap: 40px;
  }

  .about-grid {
    gap: 60px;
  }

  .timeline-item {
    grid-template-columns:
      140px
      1fr;
  }

  .timeline-description {
    grid-column: 2;
  }

}


/* -------------------------
   MOBILE
-------------------------- */

@media (max-width: 700px) {

  :root {
    --page-padding: 18px;
    --section-space: 90px;
  }

  .site-header {
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .desktop-nav {
    display: none;
  }

  .menu-button {
    display: block;
  }


  /* HERO */

  .hero {
    padding-top: 100px;
    min-height: auto;
  }

  .hero-heading h1 {
    font-size: clamp(75px, 25vw, 140px);
    line-height: 0.77;
  }

  .hero-layout {
    grid-template-columns: 1fr;

    gap: 40px;

    margin-top: 70px;
  }

  .hero-image-wrap {
    max-width: none;
  }

  .hero-image {
    aspect-ratio: 4 / 5;
  }

  .hero-copy {
    font-size: 30px;
  }

  .hero-meta {
    grid-template-columns: 1fr;

    gap: 4px;
  }


  /* HEADINGS */

  .section-heading {
    margin-bottom: 45px;
  }

  .section-heading h2 {
    font-size: clamp(55px, 18vw, 95px);
  }


  /* PROJECTS */

  .project-trigger {
    grid-template-columns:
      35px
      1fr
      25px;

    gap: 10px;

    padding: 22px 0;
  }

  .project-name {
    font-size: 25px;
  }

  .project-type {
    display: none;
  }

  .project-details-inner {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .project.open .project-details-inner {
    padding-bottom: 50px;
  }

  .project-large-stat {
    font-size: 90px;
  }


  /* ABOUT */

  .about-grid {
    grid-template-columns: 1fr;

    margin-top: 70px;
  }

  .about-image-wrap {
    max-width: none;
  }

  .about-lead {
    font-size: 31px;
  }

  .about-facts div {
    grid-template-columns: 120px 1fr;
  }


  /* EXPERIENCE */

  .timeline-item {
    grid-template-columns: 1fr;

    gap: 18px;

    padding: 25px 0;
  }

  .timeline-description {
    grid-column: auto;
  }


  /* CONTACT */

  .contact-section {
    min-height: 80vh;
  }

  .contact-section h2 {
    font-size: clamp(75px, 25vw, 135px);
    line-height: 0.76;
  }

  .contact-grid {
    grid-template-columns: 1fr;

    gap: 60px;
  }


  /* FOOTER */

  .site-footer {
    grid-template-columns: 1fr auto;
  }

  .site-footer p:nth-child(2) {
    display: none;
  }

}


/* -------------------------
   REDUCED MOTION
-------------------------- */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }

}
