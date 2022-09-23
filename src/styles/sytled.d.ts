import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundMainColor: string;
    backgroundSubColor: string;
    textMainColor: string;
    textSubColor: string;
    mainColor: string;

    borderRadius: string;

    fontXL: string;
    fontL: string;
    fontM: string;
    fontS: string;

    maxWidth: string;
  }
}
