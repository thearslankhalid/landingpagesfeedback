<template>
  <div class="grid-container">
    <div class="question-cta">
      <img
        loading="lazy"
        src="~/static/pic_bw.jpeg"
        alt="Arslan Khalid's picture"
      />
      <div class="cta-container">
        <p class="lead-text">
          Do you want me to help you convert more visitors into leads?
        </p>
        <ul>
          <li>
            <a class="nav-link" href="#">
              Yes, I want Arslan to help me to generate more leads.
            </a>
            <a class="nav-link sm-link" href="#">Yes, Please.</a>
          </li>
          <li>
            <a class="nav-link" href="#">Thanks, I will do it myself.</a>
            <a class="nav-link sm-link" href="#">No, Thanks.</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WantCta',
}
</script>
