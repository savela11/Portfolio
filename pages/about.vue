<template>
  <div class="about">
    <div class="top top--alt">
      <div class="imgContainer imgContainer--about">
        <img :src="require(`~/assets/images/personalPicture.jpg`)" alt="My Wife and I" />
      </div>
      <div class="inner">
        <h2 class="top__text-title top__text-title--large">About Me</h2>
      </div>
    </div>

    <section class="section section--aboutMe">
      <p class="section__text-para">
        Hi there! My name is Andy Savela and I'm from Brighton, MI. I have always had a passion for web development and
        programming in general. It all really started for me when I was about 13 years old. From making IRC scripts, console
        scripts in video games to GeoCities websites with friends.
      </p>
      <p class="section__text-para">
        Outside of all things technology.... I enjoy mountain biking, running with my dog Maverick (he's the Aussie Doodle on
        the front page) and playing pretty much any sport for the sake of competition.
      </p>

      <p class="section__text-para">
        Although I would be categorized in the non-traditional background for web development, I know this is exactly what I
        want to do. To many years have gone by wondering 'what if', I am ready to pursue development as a career and no
        longer just a hobby.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style lang="scss" scoped>
@use '~@/assets/styles/views/_about.scss';
</style>
