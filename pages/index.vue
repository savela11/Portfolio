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
        <div class="inner">
          <h2>Design</h2>
          <div class="tool__top">
            <p>UX, UI, Web, PWA</p>
          </div>
          <div class="tool__bottom">
            <h3>Tools:</h3>
            <ul>
              <li v-for="tool in designTools" :key="tool">{{ tool }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="frontEnd tool">
        <div class="inner">
          <h2>Front End</h2>

          <div class="tool__top">
            <p>HTML, SCSS, Sass, Javascript, Vue</p>
          </div>

          <div class="tool__bottom">
            <h3>Tools:</h3>
            <ul>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>Git</li>
              <li>Terminal</li>
              <li>Cmder</li>
              <li>Zsh</li>
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
    frontEndTools: ["Webpack", "Gulp", "Git", "Terminal", "Cmder", "Nuxt"],
  }),
})
</script>

<style lang="scss">
$--sectionH3FS: (
  null: 2rem,
  $mobile: 2.2rem,
);
$--sectionParaFS: (
  null: 1.4rem,
  $mobile: 1.6rem,
);

.top {
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  @include padding($--basePadding);
  @include mobile {
    height: 550px;
  }

  @include desktopSmall {
    height: 700px;
  }
  @include desktopLarge {
    height: 850px;
  }

  .imgContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      background: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.6)));
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7));
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @include desktopLarge {
        object-position: 100% -950px;
      }
    }
  }

  .inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h2 {
    color: white;
    @include font-size($--titleFS);
    letter-spacing: -0.46px;
    width: 80%;
    margin-bottom: 0.5rem;
    line-height: 1.4;
    @include desktopSmall {
      width: auto;
      margin-bottom: 0;
    }
  }

  p {
    color: white;
    @include font-size($--baseFS);
    line-height: 1.5;
    letter-spacing: 0;
    font-weight: 600;
    @include desktop {
      line-height: 1.8;
    }
    @include desktopLarge {
      @include font-size($--lgFS);
    }
  }
}

section {
  margin: 0 0 5rem 0;
  @include padding($--basePadding);
  @include tablet-landscape {
    margin: 0;
  }

  h2 {
    @include font-size($--sectionTitleFS);
    //@include dynamicMixin(line-height, $--lgLH);

    font-weight: 800;
    letter-spacing: 0;
    color: #282828;
  }

  h3 {
    @include font-size($--sectionH3FS);
    @include line-height($--mdLH);
  }

  p {
    margin: 1rem 0;
    letter-spacing: 0;
    max-width: 535px;
    color: #868686;

    @include tablet {
      max-width: 575px;
    }
  }

  ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    @include tablet-landscape {
      margin: 0;
    }

    li {
      @include font-size($--baseFS);
      @include line-height($--smLH);
      font-weight: 500;
      letter-spacing: 0;
      color: #868686;
      flex: 0 0 50%;
      padding: 0.2rem;
    }
  }
}

.tools {
  position: relative;
  @include tablet-landscape {
    display: flex;
    padding: 5rem 10rem;
  }
}

.tool {
  padding: 1rem 0;
  //padding: 0 3rem;
  @include mobile {
    padding: 2rem 0;
  }
  @include tablet {
    //padding: 0 8rem;
  }
  @include tablet-landscape {
    padding: 1rem 2rem;
    flex: 0 0 50%;
  }
  @include desktopSmall {
    padding: 1rem 3rem;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
    @include font-size($--tinyFS);
    @include line-height($--smLH);
  }

  &.design {
    .inner {
      border-top: 2px solid #051d3a;
      @include tablet-landscape {
        border-top: none;
        border-bottom: 2px solid #051d3a;
      }
    }

    &::after {
      content: "";
      position: absolute;
      background-color: #051d3a;
      top: 0;
      left: 0;
      right: 0;
      height: 400px;
      @include tablet-landscape {
        height: 250px;
      }
    }
  }

  &.frontEnd {
    .inner {
      border-bottom: 2px solid #051d3a;
    }
  }

  .inner {
    background-color: white;
    margin: 0 auto;
    padding: 3rem;
    border-radius: 12px;
    transform: translateY(-75px);
    min-height: 300px;
    z-index: 1;
    position: relative;
    @include mobile {
      transform: translateY(-120px);
    }
    @include tablet {
      width: 80%;
    }

    @include tablet-landscape {
      transform: translateY(0);
      width: auto;
      padding: 2rem;
    }
    @include desktopSmall {
      padding: 3rem;
    }
  }

  &__top {
    margin: 0.5rem 0;
  }

  &__bottom {
    @include tablet-landscape {
      padding: 0.5rem;
    }
  }
}

.aboutMe {
  position: relative;

  h2 {
  }

  p {
    @include dynamicMixin("font-size", $--baseFS);
    @include dynamicMixin("line-height", $--mdLH);
    @include dynamicMixin("max-width", $--paraWidth);
    @include tablet {
      @include dynamicMixin("line-height", $--lgLH);
    }
  }
}
</style>
