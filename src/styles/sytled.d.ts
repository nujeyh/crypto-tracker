import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundMainColor: string;
    backgroundSubColor: string;
    textColor: string;
    mainColor: string;

    fontXL: string;
    fontL: string;
    fontM: string;
    fontS: string;
  }
}
