import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: ${props =>props.theme.boxsizing}
        margin: ${props=>props.theme.margin}
    }

    body{
        background-color: ${props=>props.theme.colors.main};
        margin: ${props=>props.theme.margin};
        font-family: ${props=>props.theme.fontFamily}, 'san-serif';
    }
`

export default GlobalStyles