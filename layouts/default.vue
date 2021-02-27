<template>
  <div>
    <div class="shape-container">
      <img :src="require(`~/assets/images/rectangle.svg`)" alt="bottom shape" />
    </div>
    <header>
      <div class="headerContainer">
        <div class="logo">
          <div class="logo__container">
            <p><span>A</span> <span>S</span></p>
          </div>
        </div>
        <button class="menuBtn" @click="toggleNavMenu(!isNavMenuShowing)"><span></span> <span></span> <span></span></button>
      </div>

      <nav v-show="isNavMenuShowing" class="navMenu">
        <ul class="linkList">
          <li @click.prevent.stop="toggleNavMenu(false)">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li @click.prevent.stop="toggleNavMenu(false)">
            <nuxt-link to="/about">About Me</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      isNavMenuShowing: false,
    }
  },
  methods: {
    toggleNavMenu(status: boolean) {
      const navMenu = document.querySelector(".navMenu")
      const menuBtn = document.querySelector(".menuBtn")
      // const logoContainer = document.querySelector(".logo__container")
      menuBtn!.classList.toggle("open")
      if (status) {
        document.body.style.position = "fixed"
        document.body.style.overflowY = "hidden"
        navMenu!.classList.remove("hideMenu")
        navMenu!.classList.add("showMenu")
        this.isNavMenuShowing = status
      } else {
        document.body.style.position = "static"
        document.body.style.overflowY = "auto"
        navMenu!.classList.remove("showMenu")
        navMenu!.classList.add("hideMenu")

        setTimeout(() => {
          this.isNavMenuShowing = status
        }, Math.floor(300))
      }
    },
  },
})
</script>

<style lang="scss">
@use '~@/assets/styles/components/header';
</style>
