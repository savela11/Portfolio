<template>
  <div class="home">
    <div class="top">
      <div class="imgContainer imgContainer--home">
        <img :src="require(`~/assets/images/topImg.jpg`)" alt="Laptop on a desk." />
      </div>
      <div class="inner">
        <h2 class="top__text-title">Full-Stack Web Developer</h2>
        <p class="top__text-para">Responsive Web Design</p>
        <p class="top__text-para">Progressive Web Apps</p>
        <p class="top__text-para">Single Page Apps</p>
        <p class="top__text-para">UX/UI Design</p>
      </div>
    </div>

    <section class="tools">
      <div class="tool tool--design">
        <div class="card">
          <div class="card__container card__container--design">
            <h2 class="card__text-title">Design</h2>
            <div class="card__top">
              <p class="card__text-para">UX, UI, Web, PWA</p>
            </div>
            <div class="card__bottom">
              <h3 class="card__text-altTitle">Tools:</h3>
              <ul class="card__list">
                <li v-for="tool in designTools" :key="tool" class="card__text-list-item">{{ tool }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="tool tool--frontEnd">
        <div class="card card--frontEnd">
          <div class="card__container card__container--frontEnd">
            <h2 class="card__text-title">Front End</h2>
            <div class="card__top">
              <p class="card__text-para">HTML, SCSS, Sass, Javascript, Vue</p>
            </div>
            <div class="card__bottom">
              <h3 class="card__text-altTitle">Tools:</h3>
              <ul class="card__list">
                <li v-for="tool in frontEndTools" :key="tool" class="card__text-list-item">{{ tool }}</li>
              </ul>
            </div>
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

<style lang="scss" scoped>
@use '~@/assets/styles/views/index';
</style>
