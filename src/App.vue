<script setup lang="ts">
import skin from '@/components/skin.vue'
</script>

<template>
  <div class="apka">
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
            name="azerino+vac"
            img="https://netwhynot.s-ul.eu/q4E0N9dP"
            link="https://netwhynot.s-ul.eu/vUYH9Uuk"
          ></skin>
          <skin
            name="vaxedit"
            img="https://netwhynot.s-ul.eu/joPEzaSj"
            link="https://netwhynot.s-ul.eu/nH6mNKto"
          ></skin>
          <skin
            name="tekkitorafis"
            img="https://netwhynot.s-ul.eu/8eHLOiFb"
            link="https://netwhynot.s-ul.eu/uybCVkT0"
          ></skin>
        </div>
        <h2 class="heading">other skins</h2>
        <div class="grid">
          <skin
            name="shige"
            img="https://netwhynot.s-ul.eu/rqSXdVhp"
            link="https://netwhynot.s-ul.eu/bTioNEH7"
          ></skin>
          <skin
            name="maika v2"
            img="https://netwhynot.s-ul.eu/Ap3ye7Jd"
            link="https://netwhynot.s-ul.eu/D8kUyeAT"
          ></skin>
          <skin
            name="emilia copy (gameplay only)"
            img="https://netwhynot.s-ul.eu/DCuO2mIE"
            link="https://netwhynot.s-ul.eu/lfrlvw0N"
          ></skin>
          <skin
            name="rafis elohere"
            img="https://netwhynot.s-ul.eu/NOb96OFZ"
            link="https://netwhynot.s-ul.eu/dno2KLPA"
          ></skin>
          <skin
            name="elohere x Seouless"
            img="https://netwhynot.s-ul.eu/bxg29qFO"
            link="https://netwhynot.s-ul.eu/rAjtaC8j"
          ></skin>
          <skin
            name="monkodtcroix"
            img="https://netwhynot.s-ul.eu/3uws1nYh"
            link="https://netwhynot.s-ul.eu/hcYsKm7e"
          ></skin>
          <skin
            name="lugianm"
            img="https://netwhynot.s-ul.eu/wc2pxWeF"
            link="https://netwhynot.s-ul.eu/esGkNrOp"
          ></skin>
          <skin
            name="monkoedit"
            img="https://netwhynot.s-ul.eu/CX1hxyiW"
            link="https://netwhynot.s-ul.eu/tZRYovW6"
          ></skin>
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
