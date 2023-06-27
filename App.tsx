import React from "react";
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
import { LoginScreen } from "./src/screens/LoginScreen";

export function App(){
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  )
}