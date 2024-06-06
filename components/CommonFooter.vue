<script setup lang="ts">

</script>

<template>
  <footer class="w-100 footer-wrapper">
    <div class="width-wrapper footer">
      <div class="d-flex flex-adapt gap-mob-32 align-items-center justify-content-between">
        <div>
          <div class="title-30 menu-logo fw-900 footer-logo">
            ЗАБЕРУ.РУ
          </div>
          <div class="grayblue-text title-14-medium">
            Вывоз мусора за 15 минут
          </div>
        </div>
        <div class="d-flex gap-24">
          <a href="" target="_blank">
            <img loading="lazy" src="@/assets/svg/tg.svg" alt="tg">
          </a>
          <a href="" target="_blank">
            <img loading="lazy" src="@/assets/svg/vk.svg" alt="tg">
          </a>
          <a href="" target="_blank">
            <img loading="lazy" src="@/assets/svg/inst.svg" alt="tg">
          </a>
          <a href="" target="_blank">
            <img loading="lazy" src="@/assets/svg/dzen.svg" alt="tg">
          </a>
        </div>
      </div>
      <div class="mt-32">
        <div class="d-flex align-items-center justify-content-between">
          <div class="footer-links d-flex gap-24 title-14-medium grayblue-text fw-500 d-xl-block d-none">
            <nuxt-link to="/">
              Наши услуги
            </nuxt-link>
            <nuxt-link to="/">
              Как это работает
            </nuxt-link>
            <nuxt-link to="/">
              О компании
            </nuxt-link>
            <nuxt-link to="/">
              Контакты
            </nuxt-link>
          </div>
          <div class="d-flex gap-48">
            <a class="grayblue-text fw-500 title-20-med" href="tel:88005553535">8 800 555 35 35</a>
            <a class="grayblue-text fw-500 title-20-med" href="tel:info@zaberu.ru">info@zaberu.ru</a>
          </div>
        </div>
      </div>
      <div class="mt-32 flex-adapt d-flex justify-content-between title-14-medium fw-500 gap-mob-32">
        <div class="footer-copyright">© 2024 Заберу.ру</div>
        <div class="d-flex gap-32 footer-policy flex-wrap">
          <nuxt-link to="/">
            Как это работает
          </nuxt-link>
          <nuxt-link to="/">
            Контакты
          </nuxt-link>
          <nuxt-link to="/">
            Политика конфиденциальности
          </nuxt-link>
          <nuxt-link to="/">
            Пользовательское соглашение
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-wrapper {
  border-top: 2px solid #EDEFF2;
  padding: 48px 0;

  @include breakpoint(xl) {
    padding: 32px 0;
  }
}

.footer {
  img {
    width: 40px;

    @include breakpoint(xl) {
      width: 32px;
    }
  }

  @include breakpoint(xl) {
    .flex-adapt {
      flex-direction: column;
      align-items: start !important;
    }

    .gap-48 {
      gap: 24px;
    }
  }

  &-logo {
    color: $brand-blue;

    @include breakpoint(xl) {
      font-size: 30px;
    }
  }

  &-links {
    a {
      color: $gray-text;
    }
  }

  &-copyright {
    color: $brand-blue;

    @include breakpoint(xl) {
      order: 1;
    }
  }

  &-policy {
    @include breakpoint(xl) {
      order: 0;

      gap: 16px 24px;
    }

    a {
      color: #7D8FB3;

      @include breakpoint(xl) {
        color: #4D5E80;
      }
    }
  }
}
</style>