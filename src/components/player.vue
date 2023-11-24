<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import Skin from "@/components/skin.vue";
import db from "@/db.json";
import type { TName } from "@/types/general";

const route = useRoute();
const playerInfo = ref(db[route.path.replace("/skinhub/", "") as TName]);
</script>

<template>
  <div class="apka">
    <header>
      <div class="container header">
        <img class="logo" width="640" height="360" src="@/assets/img/ntwn.png" alt="logo" />
        <div class="socials">
          <a
            target="_blank"
            class="twitch"
            aria-label="twitch"
            :href="playerInfo.socials.twitch"
          ></a>
          <a
            target="_blank"
            class="twitter"
            aria-label="twitter"
            :href="playerInfo.socials.twitter"
          ></a>
          <a
            target="_blank"
            v-if="playerInfo.socials.discord !== ''"
            class="discord"
            aria-label="discord"
            :href="playerInfo.socials.discord"
          ></a>
          <a
            target="_blank"
            v-if="playerInfo.socials.github !== ''"
            class="github"
            aria-label="github"
            :href="playerInfo.socials.github"
          ></a>
        </div>
        <p>If you didn't find skin here, then ask me directly.</p>
        <div class="br"></div>
      </div>
    </header>
    <main>
      <div class="container main">
        <h2 class="heading">most used</h2>
        <div class="grid">
          <Skin
            v-for="skin in Array.from(Object.values(playerInfo.skins.mostUsed))"
            :key="skin.name"
            :name="skin.name"
            :img="skin.img"
            :link="skin.link"
            :main="playerInfo.main"
            :secondary="playerInfo.secondary"
          />
        </div>
        <h2 v-if="Object.keys(playerInfo.skins.other).length !== 0" class="heading">other skins</h2>
        <div v-if="Object.keys(playerInfo.skins.other).length !== 0" class="grid">
          <Skin
            v-for="skin in Array.from(Object.values(playerInfo.skins.other))"
            :key="skin.name"
            :name="skin.name"
            :img="skin.img"
            :link="skin.link"
            :main="playerInfo.main"
            :secondary="playerInfo.secondary"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.apka {
  padding: 40px 0;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  .logo {
    width: 90px;
    height: auto;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    & > a {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      overflow: visible;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: background-image 0.3s ease-out;

      &:focus {
        outline: 2px solid v-bind("playerInfo.main");
        border-radius: 4px;
      }
    }

    .twitch {
      background-image: url("@/assets/img/twitch.png");

      &:hover {
        background-image: url("@/assets/img/twitch-hover.png");
      }
    }

    .twitter {
      background-image: url("@/assets/img/twitter.png");

      &:hover {
        background-image: url("@/assets/img/twitter-hover.png");
      }
    }

    .github {
      background-image: url("@/assets/img/github.png");

      &:hover {
        background-image: url("@/assets/img/github-hover.png");
      }
    }

    .discord {
      width: 23px;
      height: 23px;
      background-image: url("@/assets/img/discord.png");
      transform: translateY(1px);

      &:hover {
        background-image: url("@/assets/img/discord-hover.png");
      }
    }
  }

  & > p {
    margin: 0;
    text-align: center;
  }

  .br {
    width: 100%;
    height: 2px;
    background-color: v-bind("playerInfo.main");
    border-radius: 10px;
  }
}

.main {
  .heading {
    text-align: center;
    margin: 40px 0;
  }

  .grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px 20px;

    & > div {
      width: 48%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
}
</style>
