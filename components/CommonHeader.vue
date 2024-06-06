<template>
  <div class="header-wrapper w-100 position-relative">
    <LazyHeaderMenu />
    <img
      src="@/assets/images/enot-mobile.webp"
      alt="enot"
      class="header-background d-xl-none"
    >
    <div class="header-intro width-wrapper">
      <h1 class="header-intro__h1">Заберём мусор</h1>
      <div class="mt-3 title-30 fw-500">
        За 15 минут в один клик
      </div>
      <div class="mt-32 title-main header-intro__small">
        Вызовите нашего курьера в любое время через удобного бота
        и мы сделаем своё дело!
      </div>
      <div class="mt-40 header-intro__button title-14-medium d-flex align-items-center gap-32">
        <div>Начните пользоваться</div>
        <div class="header-intro__innerbtn white-color">
          Перейти в бота
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/enot.webp"
      alt="enot"
      class="header-background d-xl-block d-none"
    >
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  background: $white-color;
  border-radius: 0 0 96px 96px;
  padding-bottom: 262px;
  overflow: hidden;

  @include breakpoint(xl) {
    border-radius: 0 0 16px 16px;
    padding-bottom: 32px;
  }
}

.header {
  &-intro {
    margin-top: 96px;
    position: relative;
    z-index: 2;

    @include breakpoint(xl) {
      margin-top: -50px;

      .title-30 {
        @include font(16px, 500, 30px);
        text-align: center;
      }

      .mt-3 {
        margin-top: 0 !important;
      }

      .mt-40, .mt-32 {
        margin-top: 16px;
      }

      .title-14-medium {
        font-size: 12px;
        line-height: 20px;
      }

      .gap-32 {
        @include breakpoint(xl) {
          gap: 24px;
        }
      }
    }

    &__h1 {
      font-size: 80px;
      line-height: 90px;
      font-weight: 900;

      @include breakpoint(xl) {
        @include font(36px, 900, 60px);
        text-align: center;
      }
    }

    &__small {
      width: 480px;

      @include breakpoint(xl) {
        text-align: center;
        width: 100%;

        @include font(12px, 400, 20px);
      }
    }

    &__button {
      box-shadow: 0 2px 5px 0 #26334D08;
      padding: 10px 32px;
      width: fit-content;
      color: $gray-color;
      border-radius: 30px;

      @include breakpoint(xl) {
        padding: 10px 24px;
        width: 100%;
        justify-content: center;
      }
    }

    &__innerbtn {
      padding: 10px 30px;
      background: $brand-blue;
      border-radius: 30px;

      @include breakpoint(xl) {
        font-size: 14px;
      }
    }
  }

  &-background {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 700px;

    @include breakpoint(xl) {
      position: static;
      width: 816px;
      height: 474px;
      max-width: unset !important;
      transform: translateX(-54vw) translateY(-56px);
    }
  }
}
</style>
<script setup lang="ts">
</script>