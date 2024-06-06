<script setup lang="ts">

</script>

<template>
  <header class="menu d-flex width-wrapper justify-content-between align-items-center">
    <img src="@/assets/svg/burger-icon.svg" class="d-xl-none menu-burger position-absolute cursor-pointer" alt="" />
    <div class="title-30 menu-logo fw-900">
      ЗАБЕРУ.РУ
    </div>
    <div class="d-xl-flex d-none gap-40 align-items-center">
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

  @include breakpoint(xl) {
    position: absolute;
    justify-content: center;
    top: 16px;
    z-index: 3;

    &-burger {
      top: 20px;
      left: 20px;
    }
  }

  &-logo {
    color: $brand-blue;

    @include breakpoint(xl) {
      font-size: 30px;
    }
  }

  &-links {
    line-height: 25px;
    color: $gray-color;
  }
}
</style>