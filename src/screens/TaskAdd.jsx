import { View } from "react-native-web";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../config/firebase";
import { db } from "../config/firebase"
import { Text, TextInput } from "react-native-paper";
import { useState } from "react";
import styles from "../utils/styles";

export default function TaskAdd() {

  //const tarefas = collection(getFirestore(app), "tarefas");
    const [tarefa, setTarefa] = useState("");
    const tarefasRef  = collection(db, "tarefas")
    
    function handleAddTask() {
      console.log(tarefa)
      const data = {
          nomeDaTarefa: tarefa
      }

      addDoc(tarefasRef, data)
          .then((docRef) => {
              console.log("Tarefa Adicionar com a ID: ", docRef.id)
              
              setTarefa('')
          })
          .catch(
              (error) => console.log(error)
          )
  }

  return (
      <View
          style={styles.containerInner}
      >
          <TextInput
              label="Tarefa"
              mode="outlined"
              value={tarefa}
              onChangeText={setTarefa}
              right={
                  <TextInput.Icon
                      icon="plus"
                      size={28}
                      onPress={handleAddTask}
                  />
              }
              
          />
      </View>
  )
}
