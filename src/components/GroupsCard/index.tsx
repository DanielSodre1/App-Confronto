import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps &{
  title:string;
}
export function GroupsCard({title, ...rest}: Props){  
  return (
    <Container {...rest}>
      <Icon/>
      <Title>
        {title}
      </Title>
    </Container>
  )
}