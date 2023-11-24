<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import db from "@/db.json";
import type { TName } from "@/types/general";
import Skin from "@/components/skin.vue";
import Sidebar from "@/components/sidebar.vue";

const route = useRoute();
const playerInfo = ref(db[route.path.replace("/skinhub/", "") as TName]);

watch(route, () => {
  playerInfo.value = db[route.path.replace("/skinhub/", "") as TName];
})
</script>

<template>
  <Sidebar :main="playerInfo.main" :secondary="playerInfo.secondary" />
  <div class="apka">
    <header>
      <div class="container header">
        <img class="logo" width="640" height="360" :src="'/skinhub/avatars/' + playerInfo.avatar" alt="logo" />
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
        <h3>{{playerInfo.sensetive + " skins" }}</h3>
        <p>If you didn't find skin here, then ask in a <a class="link" href="https://discord.gg/UDDNbfHsZX">netwhynot's</a> discord server.</p>
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
    height: 90px;
    border-radius: 4px;
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
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(192deg) brightness(111%) contrast(101%);

      &:focus {
        outline: none;
        filter: v-bind("playerInfo.filter");
      }
    }

    .twitch {
      background-image: url("@/assets/img/twitch.png");

      &:hover {
        filter: v-bind("playerInfo.filter");
      }
    }

    .twitter {
      background-image: url("@/assets/img/twitter.png");

      &:hover {
        filter: v-bind("playerInfo.filter");
      }
    }

    .github {
      background-image: url("@/assets/img/github.png");

      &:hover {
        filter: v-bind("playerInfo.filter");
      }
    }

    .discord {
      width: 23px;
      height: 23px;
      background-image: url("@/assets/img/discord.png");
      transform: translateY(1px);

      &:hover {
        filter: v-bind("playerInfo.filter");
      }
    }
  }

  & > p {
    margin: 0;
    text-align: center;

    .link {
      color: #fff;
      transition: color 0.2s ease-out;

      &:hover {
        color: v-bind("playerInfo.main");
      }
    }
  }

  & > h3 {
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
