import "styled-components";
import { MainTheme } from "./mainTheme";

declare module "styled-components" {
  export interface DefaultTheme {
    mainTheme: MainTheme;
  }
}
