import { Alert, View, } from "react-native";
import React, { useState } from "react";
import { Container, Content,Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { AppError } from "@utils/AppError";

import { groupCreate } from "@storage/group/groupCreate";
import { useNavigation } from "@react-navigation/native";


export function NewGroup(){
  const [ group , setGroup] = useState('');

  const navigation = useNavigation(); 
  
  async function handlePlayers(){
    try{
      if(group.trim().length === 0){
        return Alert.alert('Novo Grupo', 'Informe o nome do Grupo.');
      }

      await groupCreate(group)
      navigation.navigate('players' ,{ group });

    }catch(error){
      if (error instanceof AppError){ 
        Alert.alert('Novo Grupo', error.message);
      } else{
        Alert.alert('novo Grupo', 'Não possível criar um novo grupo.');
        console.log(error);
      }
    }
  }
  return(
  <Container>
    <Header  showBackButton />
    <Content>
      <Icon/> 
      <Highlight
        title="Novo Confronto"
        subtitle="crie o confronto e adicione os jogadores"
      />

      <Input 
        placeholder="Nome do confronto"
        onChangeText={setGroup}
      />

      <Button
        title="Criar"
        style={{ marginTop: 20}}
        onPress={handlePlayers}
      />
      
    </Content>
  </Container>
  )
}