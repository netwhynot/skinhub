<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="skin">
    <a class="name" :href="props.link">{{ props.name }}</a>
    <div class="img-wrapper">
      <img class="img" width="640" height="360" :src="props.img" :alt="props.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skin {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.name {
  font-size: 20px;
  color: #fff;
  transition: color 0.3s ease-out;

  &:hover {
    color: #fff458;
  }
}

.img-wrapper {
  max-width: 768px;

  .img {
    width: 100%;
    height: auto;
    border: 2px solid #080803;
    border-radius: 8px;
  }
}
</style>
