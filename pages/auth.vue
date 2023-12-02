<template>
  <section class="auth">
    <div class="wrapper">
      <div class="auth__container">
        <nuxt-img
          class="auth__logo"
          src="img/auth/auth-logo.png"
        />
        <form
          class="auth__form"
          @submit.prevent="signInHandler"
        >
          <h1 class="auth__title">
            {{ $t('auth.title') }}
          </h1>
          <h4 class="auth__title">
            {{ $t('auth.subtitle') }}
          </h4>
          <input
            v-model="state.form.username"
            type="text"
          >
          <input
            v-model="state.form.password"
            type="text"
          >
          <!--        <custom-input-->
          <!--          v-model="state.form.username"-->
          <!--          :placeholder="$t('auth.inputs.login.placeholder')"-->
          <!--        />-->
          <!--        <custom-input-->
          <!--          v-model="state.form.password"-->
          <!--          :placeholder="$t('auth.inputs.login.placeholder')"-->
          <!--          type="password"-->
          <!--        />-->
          <custom-text-button :label="$t('auth.forgotPassword')" />
          <custom-button
            :label="$t('auth.login')"
          />
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
          <span>
            {{ $t('auth.dontHaveAccount') }}
          </span>
          <custom-text-button :label="$t('auth.signUp')" />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {definePageMeta} from '#imports';
import CustomInput from '~/components/core/ui/custom-input.vue';
import CustomTextButton from '~/components/core/ui/custom-text-button.vue';
import CustomButton from '~/components/core/ui/custon-button.vue';
import CustomDivider from '~/components/core/ui/custom-divider.vue';
import GoogleIcon from '~/components/svg/google-icon.vue';
import FacebookIcon from '~/components/svg/facebook-icon.vue';
import AppleIcon from '~/components/svg/apple-icon.vue';
import AuthService from '~/services/auth';

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
  &__form {
    width: 50%;
    @include flex-mixin(column, center, center);
    padding: calc(var(--medium-padding) * 5);
  }
  &__social-buttons {
    padding: 0 var(--large-padding);
    display: flex;
    gap: var(--small-gap);
  }
}
</style>
