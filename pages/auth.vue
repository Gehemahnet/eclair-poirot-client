<template>
  <section class="auth">
    <div class="wrapper">
      <div class="auth__container">
        <nuxt-img
          class="auth__logo"
          src="img/auth/auth-logo.png"
        />
        <div class="auth__description">
          <h1 class="auth__title">
            {{ $t('auth.title') }}
          </h1>
          <h5 class="auth__subtitle">
            {{ $t('auth.subtitle') }}
          </h5>
          <form
            class="auth__form"
            @submit.prevent="signInHandler"
          >
            <div class="auth__form-fields">
              <custom-input
                v-model="state.form.username"
                :placeholder="$t('auth.inputs.login.placeholder')"
                :prefix="letterIcon"
              />
              <custom-input
                v-model="state.form.password"
                :placeholder="$t('auth.inputs.password.placeholder')"
                type="password"
                :prefix="lockIcon"
              />
            </div>
            <button
              class="auth__forgot-password"
              type="button"
              @click="forgotPassword"
            >
              {{ $t('auth.forgotPassword') }}
            </button>
            <button
              class="auth__login button_filled-secondary"
              type="button"
              @click="signIn"
            >
              {{ $t('auth.login') }}
            </button>
            <custom-divider :label="$t('or')" />
            <div class="auth__social-buttons">
              <button class="button button_social">
                <google-icon />
              </button>
              <button class="button button_social">
                <facebook-icon />
              </button>
              <button class="button button_social">
                <apple-icon />
              </button>
            </div>
            <div class="auth__to-sign-up">
              <span>
                {{ $t('auth.dontHaveAccount') }}
              </span>
              <button>{{ $t('auth.signUp') }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {definePageMeta} from '#imports';
import CustomInput from '~/components/core/ui/custom-input.vue';
import CustomDivider from '~/components/core/ui/custom-divider.vue';
import GoogleIcon from '~/components/svg/google-icon.vue';
import FacebookIcon from '~/components/svg/facebook-icon.vue';
import AppleIcon from '~/components/svg/apple-icon.vue';
import AuthService from '~/services/auth';

import letterIcon from '~/components/svg/letter-icon.vue';
import lockIcon from '~/components/svg/lock-icon.vue';

definePageMeta({
  layout: 'plain',
});

const state = reactive({
  form: {
    username: '',
    password: '',
  },
});
const {signIn, signUp} = AuthService();
const forgotPassword = () => {

};
const signInHandler = () => {
  signIn(state.form)
    .then((data) => {
      const tokenCookie = useCookie('token', {
        expires: new Date(data.expires),
      });
      tokenCookie.value = data.access_token;
    })
    .catch(() => {
    });
};
</script>

<style scoped lang="scss">
.auth {
  height: 100vh;
  display: flex;
  align-items: center;

  &__container {
    display: flex;
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  &__logo {
    width: 50%;
  }
  &__description {
    width: 50%;
    @include flex-mixin(column, center, center);
    padding: calc(var(--medium-padding) * 3) calc(var(--medium-padding) * 5);
  }
  &__form {
    margin-top: var(--medium-padding);
    @include flex-mixin(column, center, center);
    width: 100%;
    &-fields {
      @include flex-mixin(column, center, center);
      width: 100%;
      gap: var(--big-gap);
    }
  }
  &__title {
    text-align: center;
  }
  &__forgot-password {
    height: auto;
    font-size: var(--common-font-size);
    line-height: 1.25em;
    align-self: flex-end;
    color: var(--grey-text-color);
  }

  &__login {
    margin: var(--large-padding) 0;
    max-width: 100%;
    min-width: 40%;
  }
  &__social-buttons {
    padding: 0 var(--large-padding);
    display: flex;
    width: 100%;
    gap: var(--small-gap);
  }
}
</style>
