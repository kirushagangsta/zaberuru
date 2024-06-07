<template>
  <div class="main width-wrapper">
    <section class="main-works">
      <h2 class="title-1 fw-900">Как это работает</h2>
      <div class="d-flex flex-adapt mt-96 gap-24">
        <div class="main-works__block w-100 title-2 fw-900 white-color position-relative">
          <div>
            ШАГ 1: ПРОСТО НАЖМИТЕ КНОПКУ
          </div>
          <div class="title-20-med fw-400 mt-3">
            И наш курьер сразу направится к<br class="d-xl-block d-none" /> вам в любое время
          </div>
          <img class="main-works__block-image" loading="lazy" src="@/assets/svg/phone-bloom.svg" alt="phone">
        </div>
        <div class="main-works__block main-works__block_pink white-color title-2 fw-900 w-100 position-relative">
          <div>
            ШАГ 2: КУРЬЕР<br class="d-xl-block d-none" /> ЗАБЕРЁТ МУСОР
          </div>
          <div class="title-20-med fw-400 mt-3">
            Оставьте мусор у двери или<br class="d-xl-block d-none" /> передайте курьеру лично
          </div>
          <img class="main-works__block-image" loading="lazy" src="@/assets/svg/trash.svg" alt="trash">
        </div>
      </div>
      <div class="mt-96 main-works__steps position-relative">
        <div class="d-flex gap-32">
          <div class="main-works__steps-number title-20-med white-color">
            1
          </div>
          <div class="gray-color">
            <div class="title-3 fw-900">Авторизация</div>
            <div class="mt-1 title-main">Вы переходите в нашего телеграм&nbsp;бота</div>
          </div>
        </div>
        <div class="d-flex gap-32 mt-5">
          <div class="main-works__steps-number main-works__steps-number_green title-20-med white-color">
            2
          </div>
          <div class="gray-color">
            <div class="title-3 fw-900">Способ оплаты</div>
            <div class="mt-1 title-main">Вы привязываете карту для оплаты</div>
          </div>
        </div>
        <div class="d-flex gap-32 mt-5">
          <div class="main-works__steps-number main-works__steps-number_orange title-20-med white-color">
            3
          </div>
          <div class="gray-color">
            <div class="title-3 fw-900">Результат</div>
            <div class="mt-1 title-main">Мы вовремя и оперативно вывозим ваш мусор</div>
          </div>
        </div>
        <img class="position-absolute main-works__steps-phone d-none d-xl-block" loading="lazy" src="@/assets/images/iphone.webp"
             alt="iphone">
      </div>
    </section>
    <section class="main-tariffs">
      <h2 class="title-1 fw-900">Тарифы</h2>
      <div class="mt-96 main-tariffs__blocks">
        <div
          class="main-tariffs__single w-100 d-flex flex-column align-items-center justify-content-center white-color text-center">
          <div class="title-2">
            99 ₽<br/>
            Разово
          </div>
          <div class="mt-3 title-20-med fw-400">
            До 4 пакетов
          </div>
        </div>
        <div
          class="main-tariffs__single w-100 d-flex flex-column align-items-center justify-content-center white-color text-center">
          <div class="title-2">
            + 199 ₽
          </div>
          <div class="mt-3 title-20-med fw-400">
            До 4 пакетов
          </div>
        </div>
        <div
          class="main-tariffs__single main-tariffs__single_pink w-100 d-flex flex-column align-items-center justify-content-center white-color text-center">
          <div class="title-2">
            799 ₽<br/>
            В неделю
          </div>
          <div class="mt-3 title-20-med fw-400">
            Не больше 2 раз в день
          </div>
        </div>
        <div
          class="main-tariffs__single main-tariffs__single_pink w-100 d-flex flex-column align-items-center justify-content-center white-color text-center">
          <div class="title-2">
            1999 ₽<br/>
            В месяц
          </div>
          <div class="mt-3 title-20-med fw-400">
            Не больше 2 раз в день
          </div>
        </div>
      </div>
    </section>
    <section class="main-reviews flex-column d-flex gap-120">
      <div class="main-reviews__single d-flex gap-96">
        <div class="main-reviews__person d-flex flex-column align-items-center gap-24">
          <div class="main-reviews__person-avatar"></div>
          <div class="text-center">
            <div class="title-30 fw-700">Михаил</div>
            <div class="mt-1 title-20-med">
              Пользователь<br class="d-xl-block d-none" />
              «Заберу.ру»
            </div>
          </div>
        </div>
        <div class="main-reviews__text title-20-med fw-400 black-color">
          «Для меня это было настоящей находкой! Один клик и ваш мусор приходит забирать курьер, а помимо этого, можно
          воспользоваться и опцией бесконтактной передачи вашего мусора»
        </div>
      </div>
      <div class="main-reviews__single d-flex gap-96">
        <div class="main-reviews__person d-flex flex-column align-items-center gap-24">
          <div class="main-reviews__person-avatar main-reviews__person-avatar_pink"></div>
          <div class="text-center">
            <div class="title-30 fw-700">Яков&nbsp;Стативка</div>
            <div class="mt-1 title-20-med">
              Основатель<br class="d-xl-block d-none" />
              «Заберу.ру»
            </div>
          </div>
        </div>
        <div class="main-reviews__text title-20-med fw-400 black-color">
          «Для меня это было настоящей находкой! Один клик и ваш мусор приходит забирать курьер, а помимо этого, можно
          воспользоваться и опцией бесконтактной передачи вашего мусора»
        </div>
      </div>
    </section>
    <section class="main-faq">
      <h2 class="title-1 fw-900">Часто-задаваемые вопросы</h2>
      <div
        class='mt-96 d-flex flex-column main-faq__items'
      >
        <div
          v-for='q in faqs'
          :key='q.q'
          class='w-100 justify-content-between align-items-start item cursor-pointer'
          @click='q.active = !q.active'
        >
          <div class="w-100 d-flex que-border">
            <div
              class='title-20-med grayblue-text t-all05 que w-100 fw-500'
            >
              {{ q.q }}
            </div>
            <img
              class='arrow'
              src='@/assets/svg/choose.svg'
              alt='choose'
              :style='{ "transform": q.active ? "rotate(180deg)" : "rotate(0)" }'
              loading="lazy"
            />
          </div>
          <div
            class='lh-140 pale-gray-text ans title-18-regular grayblue-text'
            :style='{ "max-height": q.active ? "100px" : 0 , "opacity": q.active ? 1 : 0 }'
          >
            <div class='pt-12 text-desk title-18-regular'>{{ q.a }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-connect position-relative">
      <div class="white-color">
        <div class="title-4 fw-900">
          Хотите подключать ваш<br/> ЖК или микрорайон?
        </div>
        <div class="mt-3 title-20-med fw-400">
          Присоединяйтесь к франшизе Заберу.ру.<br/>
          Уже подключено ЖК «Мир Митино».
        </div>
        <nuxt-link to="/">
          <div class="mt-5 title-14-medium main-connect__button fw-900 d-flex align-items-center">
            <div>
              Стать партнёром
            </div>
            <img src="@/assets/svg/arrow-right.svg" loading="lazy" alt="">
          </div>
        </nuxt-link>
      </div>
      <img class="main-connect__back position-absolute" loading="lazy" src="@/assets/images/building.webp" alt="building">
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @include breakpoint(xl) {
    h2 {
      text-align: center;
    }
  }

  &-works {
    margin-top: 192px;

    @include breakpoint(xl) {
      margin-top: 144px;

      .mt-96 {
        margin-top: 48px;
      }

      .flex-adapt {
        flex-direction: column;
      }
    }

    &__block {
      background: $brand-blue;
      padding: 131px 48px 231px;
      border-radius: 24px;
      overflow: hidden;

      @include breakpoint(xl) {
        padding: 64px 20px 318px;
      }

      &-image {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }

    &__block_pink {
      background: $brand-pink;

      .main-works__block-image {
        bottom: 40px;
      }
    }

    &__steps {
      background: $white-color;
      padding: 64px 48px;
      border-radius: 24px;

      @include breakpoint(xl) {
        padding: 48px 20px;

        .gap-32 {
          gap: 24px;
        }
      }

      &-number {
        background: #27A6E5;
        box-shadow: 0 10px 30px 0 #27A6E54D;
        padding: 13px 22px;
        border-radius: 16px;
        height: fit-content;

        @include breakpoint(xl) {
          padding: 5px 14px;
          border-radius: 10px;
        }
      }

      &-number_green {
        background: #29CC39;
        box-shadow: 0 10px 30px 0 #29CC394D;
      }

      &-number_orange {
        background: #FF6633;
        box-shadow: 0 10px 30px 0 #FF66334D;
      }

      &-phone {
        height: 671px;
        top: -160px;
        right: -150px;
      }
    }
  }

  &-tariffs {
    margin-top: 240px;

    @include breakpoint(xl) {
      margin-top: 144px;

      .mt-96 {
        margin-top: 64px;
      }

      .mt-3 {
        margin-top: 8px !important;
      }
    }

    &__blocks {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;

      @include breakpoint(xl) {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &__single {
      height: 300px;
      background: $brand-blue;
      border-radius: 24px;

      @include breakpoint(xl) {
        height: 200px;
      }
    }

    &__single_pink {
      background: $brand-pink;
    }
  }

  &-reviews {
    margin-top: 240px;

    @include breakpoint(xl) {
      margin-top: 144px;
      gap: 24px;

      .gap-96 {
        gap: 24px;
      }

      .title-20-med {
        font-size: 16px;
      }
    }

    &__single {
      @include breakpoint(xl) {
        flex-direction: column;
        background: $white-color;
        padding: 64px 20px;
        border-radius: 24px;
      }
    }

    @include up-breakpoint(xl) {
      &__single:nth-child(2n) {
        .main-reviews__text {
          order: 0;
        }

        .main-reviews__person {
          order: 1;
        }
      }
    }

    &__person {
      &-avatar {
        border-radius: 100px;
        width: 200px;
        height: 200px;
        background: $brand-blue;

        @include breakpoint(xl) {
          width: 96px;
          height: 96px;
        }
      }

      &-avatar_pink {
        background: $brand-pink;
      }
    }

    &__text {
      @include breakpoint(xl) {
        text-align: center;
      }

      @include up-breakpoint(xl) {
        background: $white-color;
        border-radius: 24px;
        padding: 124px 48px;
      }
    }
  }

  &-faq {
    margin-top: 240px;

    @include breakpoint(xl) {
      margin-top: 144px;

      h2 {
        text-align: start;
      }

      .mt-96 {
        margin-top: 64px;
      }
    }

    &__items {
      gap: 48px;

      @include breakpoint(xl) {
        .title-20-med {
          font-size: 16px;
        }

        gap: 32px;
      }

      .item {
        border-bottom: 1px solid rgba(255, 255, 255, 0.10);
      }

      .arrow {
        transition: all 0.7s;
      }

      .que {
        text-align: start;
      }

      .que-border {
        border-bottom: 1px solid #3361FF66;
        padding-bottom: 32px;
        gap: 48px;

        @include breakpoint(xl) {
          padding-bottom: 24px;
          gap: 24px;
        }
      }

      .ans {
        transition: all 0.7s;
        text-align: start;
        margin-top: 16px;
      }
    }
  }

  &-connect {
    margin-top: 240px;
    margin-bottom: 192px;
    padding: 96px 48px 66px;
    border-radius: 24px;
    background: $brand-blue;
    overflow: hidden;

    a {
      position: relative;
      z-index: 2;
    }

    @include breakpoint(xl) {
      margin: 144px 0;
      padding: 48px 20px 284px;

      .title-4 {
        @include font(25px, 900, 50px);
      }

      .title-20-med {
        @include font(14px, 500, 30px);
      }

      .mt-5 {
        margin-top: 32px !important;
      }
    }

    &__back {
      bottom: 0;
      right: 0;
      height: 430px;

      @include breakpoint(xl) {
        width: 100%;
        height: auto;
      }
    }

    &__button {
      border-radius: 30px;
      width: fit-content;
      background: $white-color;
      color: $brand-blue;
      padding: 15px 25px 15px 30px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          q: "Здесь будет какой-то вопрос, заканчивающийся вопросительным знаком?",
          a: "А вот здесь будет какой-то ответ, заканчивающийся точкой.",
          active: false,
        },
        {
          q: "Здесь будет какой-то вопрос, заканчивающийся вопросительным знаком?",
          a: "А вот здесь будет какой-то ответ, заканчивающийся точкой.",
          active: false,
        },
        {
          q: "Здесь будет какой-то вопрос, заканчивающийся вопросительным знаком?",
          a: "А вот здесь будет какой-то ответ, заканчивающийся точкой.",
          active: false,
        },
        {
          q: "Здесь будет какой-то вопрос, заканчивающийся вопросительным знаком?",
          a: "А вот здесь будет какой-то ответ, заканчивающийся точкой.",
          active: false,
        },
      ]
    }
  }
}
</script>