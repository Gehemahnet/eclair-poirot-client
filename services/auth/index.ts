import type {ISignInDto, ISignUpDto, ISignInResponse, ISignUpResponse} from '~/services/auth/types';
import createApiUrl from '~/services';

const AuthService = function() {
  async function signIn(data: ISignInDto) {
    const url = createApiUrl('auth');
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded',
    };
    const body = new URLSearchParams(data);
    try {
      const response = await useFetch<ISignInResponse>(url, {
        method: 'POST',
        headers,
        body,
        onResponse({response}) {
          const tokenCookie = useCookie('token', {
            expires: new Date(response._data.expires),
          });
          tokenCookie.value = response._data.access_token;
        },
      });
      return response.data.value;
    } catch (error) {
      throw Error(error.statusCode);
    }
  }
  async function signUp(body: ISignUpDto) {
    const url = createApiUrl('sign_up');
    const headers = {
      'Content-type': 'application/json',
    };
    try {
      const response = await useFetch<ISignUpResponse>(url, {
        method: 'POST',
        headers,
        body,
      });
      console.log(response);
    } catch (error) {
      throw Error(error.statusCode);
    }
  }

  return {
    signIn, signUp,
  };
};

export default AuthService;
