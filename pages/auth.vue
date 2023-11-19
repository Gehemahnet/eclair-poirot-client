<template>
  <section class="auth">
    <div class="wrapper">
      <h1 class="auth__title">
        {{ $t('auth.title') }}
      </h1>
      <h4 class="auth__title">
        {{ $t('auth.subtitle') }}
      </h4>
      <form @submit.prevent="signInHandler">
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
        <button>
          <google-icon />
        </button>
        <button>
          <facebook-icon />
        </button>
        <button>
          <apple-icon />
        </button>
        <span>
          {{ $t('auth.dontHaveAccount') }}
        </span>
        <custom-text-button :label="$t('auth.signUp')" />
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import CustomInput from '~/components/core/ui/custom-input.vue';
import CustomTextButton from '~/components/core/ui/custom-text-button.vue';
import CustomButton from '~/components/core/ui/custon-button.vue';
import CustomDivider from '~/components/core/ui/custom-divider.vue';
import GoogleIcon from '~/components/svg/google-icon.vue';
import FacebookIcon from '~/components/svg/facebook-icon.vue';
import AppleIcon from '~/components/svg/apple-icon.vue';
import AuthService from '~/services/auth';

const {signIn, signUp} = AuthService();


const state = reactive({
  form: {
    username: '',
    password: '',
  },
});
const signInHandler = () => {
  const tokenCookie = useCookie('token');
  signIn(state.form);
  // .then(data => {
  //   console.log(data);
  //   tokenCookie.value = data['access_token'];
  //   console.log(tokenCookie);
  // });
};
</script>

<style scoped lang="scss">

</style>
