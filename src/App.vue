<script setup lang="ts">
import { RouterView, useRouter, useRoute } from "vue-router";
import db from "@/db.json";
import type { TName } from "@/types/general";

const router = useRouter();
router.beforeEach((to, from, next) => {
  if (db[to.path.replace("/skinhub/", "") as TName] === undefined) {
    next({
      path: "/skinhub/",
      replace: true
    });
  } else {
    next();
  }
});
</script>

<template>
  <RouterView />
</template>

<style lang="scss"></style>
