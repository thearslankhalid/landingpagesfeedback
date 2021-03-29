<template>
  <div class="about-page">
    <Header />
    <header class="header">
      <div class="grid-container">
        <img
          loading="lazy"
          src="~/static/pic_bw.jpeg"
          alt="Arslan Khalid's picture"
        />
        <div class="content">
          <h1>Hi, Arslan here.</h1>
          <div class="lead-text">
            I build, create, and optimize landing pages to help you get more
            leads, sales, and customers.
          </div>
        </div>
      </div>
    </header>
    <section id="impact-section">
      <div class="grid-container">
        <h2>Areas where I can create an impact</h2>
        <div class="cards-row">
          <div class="card">
            <FeedbackIcons icon-name="tachometer" />
            <h4>Landing page optimization</h4>
            <p>To boost the user experience of the landing page</p>
          </div>
          <div class="card">
            <FeedbackIcons icon-name="users" />
            <h4>Conversion rate optimization</h4>
            <p>To convert more visitors into customers</p>
          </div>
          <div class="card">
            <FeedbackIcons icon-name="align-left" />
            <h4>Copywriting improvements</h4>
            <p>To help visitors understand your product / service</p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact-section">
      <div class="grid-container">
        <p class="lead-text">
          If you have any question, just drop me an email at
          <a href="mailto:arslan@landingpagesfeedback.com" class="link"
            >arslan@landingpagesfeedback.com</a
          >
        </p>
      </div>
    </section>
    <!-- <QuestionCta /> -->
  </div>
</template>
