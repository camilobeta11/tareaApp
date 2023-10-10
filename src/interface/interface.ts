export interface ILoginForm {
  username: string;
  password: string;
  country: string;
}

export interface ICountry {
  flag: string;
  name: ICommon;
}

export interface ICommon {
  common: string;
}
