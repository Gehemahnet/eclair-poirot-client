import type {ISignInDto, ISignUpDto, ISignInResponse, ISignUpResponse} from '~/services/auth/types';
import createApiUrl from '~/services';
import errorHandling from '~/services/error-handling';

const AuthService = function() {
  async function signIn(dto: ISignInDto) {
    const url = createApiUrl('auth');
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded',
    };
    // Здесь лучше поменять тип данных на JSON
    const body = new URLSearchParams(dto);
    const {data, error} =
      await useFetch<ISignInResponse>(url, {
        method: 'POST',
        headers,
        body,
      });
    if (data.value) {
      const tokenCookie = useCookie('token', {
        expires: new Date(data.value.expires),
      });
      tokenCookie.value = data.value.access_token;
    }
    if (error.value) {
      errorHandling(error.value);
      return error;
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
