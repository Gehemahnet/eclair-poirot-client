<template>
  <section class="auth">
    <div class="wrapper">
      <div class="auth__container">
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
            <ep-input
              v-model="state.form.username"
              :placeholder="$t('auth.inputs.login.placeholder')"
              type="text"
              :prefix="letterIcon"
            />
            <ep-input
              v-model="state.form.password"
              :placeholder="$t('auth.inputs.password.placeholder')"
              type="password"
              :prefix="lockIcon"
            />
          </div>
          <ep-button
            :label="$t('auth.forgotPassword')"
            class="auth__forgot-password"
            text
            severity="secondary"
            @click="forgotPassword"
          />
          <ep-button
            :label="$t('auth.login')"
            class="auth__login"
            severity="success"
            @click="signInHandler"
          />
          <div class="auth__to-sign-up">
            <span>
              {{ $t('auth.dontHaveAccount') }}
            </span>
            <ep-button
              :label="$t('auth.signUp')"
              plain
              text
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {definePageMeta} from '#imports';
import AuthService from '~/services/auth';

import letterIcon from '~/components/svg/letter-icon.vue';
import lockIcon from '~/components/svg/lock-icon.vue';
import EpInput from '~/components/core/ui/ep-input.vue';
import EpButton from '~/components/core/ui/ep-button.vue';

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
const signInHandler = async() => {
  await signIn(state.form);
  // try {
  //   const data = await signIn(state.form);
  //   const tokenCookie = useCookie('token', {
  //     expires: new Date(data.expires),
  //   });
  //   tokenCookie.value = data.access_token;
  // } catch (error) {
  //   console.error(error);
  // }
};
</script>

<style scoped>
.auth {
  height: 100vh;
  display: flex;
  align-items: center;
}

.auth__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: calc(var(--medium-padding) * 3) calc(var(--medium-padding) * 5);
}

.auth__form {
  margin-top: var(--medium-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.auth__form-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: var(--big-gap);
}

.auth__title {
  text-align: center;
}

.auth__forgot-password {
  height: auto;
  font-size: var(--common-font-size);
  line-height: 1.25em;
  align-self: flex-end;
  color: var(--grey-text-color);
}

.auth__login {
  margin: var(--large-padding) 0;
  max-width: 100%;
  min-width: 40%;
}

.auth__to-sign-up {
  display: flex;
  align-items: center;
}
</style>
