import React ,{ useState, useCallback } from "react";
import { FlatList, Alert } from "react-native";
import { Container, } from "./styles";


import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupsCard } from '@components/GroupsCard';
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { groupsGetAll } from "@storage/group/groupsGetAll";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function Groups() {
  const [isloading, setIsLoading] = useState(true);
  const [groups , setGroups] = useState<string[]>([]);
  const navigation =useNavigation(); 
  
  function handleNewGroup(){
    navigation.navigate('new');
  }

  async function fetchGroups(){
    try{
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);

    }catch(error){
      console.log(error);
      Alert.alert('Confrontos', 'Não foi possível carregar os confrontos');
    }finally{
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group : string){
    navigation.navigate('players', { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />

      <Highlight 
        title={"Confrontos"}
        subtitle={"Organize seus confrontos"}
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <GroupsCard 
          title={item}
          onPress={() => handleOpenGroup(item)} 
        />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0  && {flex: 1}}
        ListEmptyComponent={() => <ListEmpty 
        message = " Que tal cadastrar a primeira turma?" />}
      />
      <Button
        title="Criar novo confronto"
        onPress={handleNewGroup}
      
      />
    </Container>
  );
}
function setIsLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

