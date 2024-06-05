<template>
  <div class="header-wrapper w-100">
    <LazyHeaderMenu />
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
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  background: $white-color;
  border-radius: 0 0 96px 96px;
  padding-bottom: 262px;
}

.header {
  &-intro {
    margin-top: 96px;

    &__h1 {
      font-size: 80px;
      line-height: 90px;
      font-weight: 900;
    }

    &__small {
      width: 480px;
    }

    &__button {
      box-shadow: 0 2px 5px 0 #26334D08;
      padding: 10px 32px;
      width: fit-content;
      color: $gray-color;
      border-radius: 30px;
    }

    &__innerbtn {
      padding: 10px 30px;
      background: $brand-blue;
      border-radius: 30px;
    }
  }
}
</style>