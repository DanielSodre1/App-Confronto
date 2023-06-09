import { Container } from "./styles";
import { TextInputProps,TextInput } from "react-native";
import { useTheme } from "styled-components/native";

type props = TextInputProps &{
  inputRef?: React.RefObject<TextInput>;
}

export function Input({inputRef,...rest}: props){
  const  {COLORS} = useTheme();
    return(
      <Container 
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
    )
}