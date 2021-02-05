<template>
  <div class="home">
    <div class="top">
      <div class="imgContainer">
        <img :src="require(`~/assets/images/topImg.jpg`)" alt="My Wife and I" />
      </div>
      <div class="inner">
        <h2>Full-Stack Web Developer</h2>
        <p>Responsive Web Design</p>
        <p>Progressive Web Apps</p>
        <p>Single Page Apps</p>
        <p>UX/UI Design</p>
      </div>
    </div>

    <section class="aboutMe">
      <h2>About Me</h2>

      <p>
        Hi there! My name is Andy Savela and I'm from Brighton, MI. I have always had a passion for web development and
        programming in general. It all really started for me when I was about 13 years old. From making IRC scripts, console
        scripts in video games to GeoCities websites with friends.
      </p>

      <p>
        Outside of all things technology.... I enjoy mountain biking, running with my dog Maverick (he's the Aussie Doodle on
        the front page) and playing pretty much any sport for the sake of competition.
      </p>

      <p>
        Although I would be categorized in the non-traditional background for web development, I know this is exactly what I
        want to do. To many years have gone by wondering 'what if', I am ready to pursue development as a career and no
        longer just a hobby.
      </p>
    </section>
    <section class="tools">
      <div class="design tool">
        <div class="card">
          <h2 class="card__title">Design</h2>
          <div class="card__top">
            <p class="card__para">UX, UI, Web, PWA</p>
          </div>
          <div class="card__bottom">
            <h3 class="card__altTitle">Tools:</h3>
            <ul class="card__list">
              <li v-for="tool in designTools" :key="tool" class="card__item">{{ tool }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="frontEnd tool">
        <div class="card">
          <h2 class="card__title">Front End</h2>
          <div class="card__top">
            <p class="card__para">HTML, SCSS, Sass, Javascript, Vue</p>
          </div>
          <div class="card__bottom">
            <h3 class="card__altTitle">Tools:</h3>
            <ul class="card__list">
              <li v-for="tool in frontEndTools" :key="tool" class="card__item">{{ tool }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data: () => ({
    designTools: ["Figma", "Adobe XD", "Sketch", "Zeplin", "Adobe Illustrator"],
    frontEndTools: ["Webpack", "Gulp", "Git", "Terminal", "NPM"],
  }),
})
</script>

<style lang="scss">
@use '~@/assets/styles/views/index';
</style>
