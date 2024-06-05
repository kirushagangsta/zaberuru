<script setup lang="ts">

</script>

<template>
  <header class="menu d-flex width-wrapper justify-content-between align-items-center">
    <div class="title-30 menu-logo">
      ЗАБЕРУ.РУ
    </div>
    <div class="d-flex gap-40 align-items-center">
      <div class="d-flex gap-12">
        <img src="@/assets/svg/action.svg" alt="icon">
        <div class="title-13-bold menu-links">Как это работает</div>
      </div>
      <div class="d-flex gap-12">
        <img src="@/assets/svg/places.svg" alt="icon">
        <div class="title-13-bold menu-links">О компании</div>
      </div>
      <div class="d-flex gap-12">
        <img src="@/assets/svg/phone.svg" alt="icon">
        <div class="title-13-bold menu-links">Контакты</div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.menu {
  padding: 20px 0;

  &-logo {
    font-weight: 900;
    color: $brand-blue;
  }

  &-links {
    line-height: 25px;
    color: $gray-color;
  }
}
</style>