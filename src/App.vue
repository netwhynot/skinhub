<script setup lang="ts">
import azerino from "@/assets/img/skins/first.webp";
import skin from '@/components/skin.vue'
</script>

<template>
  <header>
    <div class="container header">
      <img class="logo" width="640" height="360" src="@/assets/img/ntwn.png" alt="logo" />
      <div class="socials">
        <a class="twitch" aria-label="twitch" href="https://www.twitch.tv/netwhynot"></a>
        <a class="twitter" aria-label="twitter" href="https://twitter.com/netwhynot"></a>
        <a class="github" aria-label="github" href="https://github.com/netwhynot"></a>
        <a class="discord" aria-label="discord" href="https://discord.gg/6VCmgGr74H"></a>
      </div>
      <p>If you didn't find skin here, then ask me directly.</p>
      <div class="br"></div>
    </div>
  </header>
  <main>
    <div class="container main">
      <h2 class="heading">most used</h2>
      <div class="grid">
        <skin
          name="azerino"
          :img="azerino"
          link="https://netwhynot.s-ul.eu/a042wV0Q"
        ></skin>
        <skin
          name="azerino"
          :img="azerino"
          link="https://netwhynot.s-ul.eu/a042wV0Q"
        ></skin>
        <skin
          name="azerino"
          :img="azerino"
          link="https://netwhynot.s-ul.eu/a042wV0Q"
        ></skin>
      </div>
      <h2 class="heading">other skins</h2>
    </div>
  </main>
</template>

<style lang="scss">
header {
  margin-top: 40px;
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
        outline: 2px solid #fff458;
        border-radius: 4px;
      }
    }

    .twitch {
      background-image: url('@/assets/img/twitch.png');

      &:hover {
        background-image: url('@/assets/img/twitch-hover.png');
      }
    }

    .twitter {
      background-image: url('@/assets/img/twitter.png');

      &:hover {
        background-image: url('@/assets/img/twitter-hover.png');
      }
    }

    .github {
      background-image: url('@/assets/img/github.png');

      &:hover {
        background-image: url('@/assets/img/github-hover.png');
      }
    }

    .discord {
      width: 23px;
      height: 23px;
      background-image: url('@/assets/img/discord.png');
      transform: translateY(1px);

      &:hover {
        background-image: url('@/assets/img/discord-hover.png');
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
    background-color: #fff458;
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
