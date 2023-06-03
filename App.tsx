import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import theme from './src/theme';
import { Loading } from '@components/loading';
import { Routes } from './src/Routes';

export default function App() {
  const [fontsLoader] =useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoader ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}


