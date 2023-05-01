import 'styled-components/native'


declare module 'styled-components/native' {
  export interface DefaultTheme {
    boxsizing: string;
    margin: string;
    colors: {
      main: string;
      buttons:string;
    };
  }
}