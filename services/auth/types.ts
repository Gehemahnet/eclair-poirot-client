export interface ISignUpDto {
  email: string;
  name: string;
  password: string;
}
export interface ISignInDto {
  username: string;
  password: string;
}
export interface ISignUpResponse {
  id: number,
  name: string,
  email: string,
  hashed_password: string,
  is_active: boolean,
  token: {
    token: string,
    expires: string
  }
}

export interface ISignInResponse {
  user_id: number;
  access_token: string,
  expires: string,
  token_type: string
}
