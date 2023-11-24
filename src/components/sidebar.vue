<script lang="ts" setup>
import db from "@/db.json";
import { ref } from "vue";

const props = defineProps({
  main: {
    type: String,
    required: true
  },
  secondary: {
    type: String,
    required: true
  },
})

const isActive = ref(false);
</script>

<template>
  <span @click="isActive = !isActive" class="icon" :class="isActive ? 'active': ''" aria-label="menu"></span>
  <div class="sidebar" :class="isActive ? 'sidebar-active' : ''">
    <ul>
      <li v-for="name in db" :key="name.sensetive">
        <RouterLink @click="isActive = !isActive" :to="'/skinhub/' + name.sensetive.toLowerCase()" class="link">{{ name.sensetive }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 10;
  width: 30px;
  height: 30px;
  background-image: url("@/assets/img/icons8-menu.svg");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}

.active {
  background-image: url("@/assets/img/icons8-close.svg");
}

.sidebar {
  position: fixed;
  z-index: 9;
  width: 0;
  height: 100%;
  padding-top: 80px;
  overflow: hidden;
  opacity: 90%;
  background-color: v-bind("props.secondary");
  transition: all 0.2s ease-out;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media screen and (max-width: 768px) {
      gap: 50px;
      font-size: 20px;
    }
  }

  .link {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s ease-out;

    &:hover {
      color: v-bind("props.main");
    }

    &:focus {
      outline: 2px solid v-bind("props.main");
      border-radius: 4px;
    }
  }
}

.sidebar-active {
  width: 141px;
  padding: 80px 70px 70px 70px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 80px 0 80px 0;
  }
}
</style>
