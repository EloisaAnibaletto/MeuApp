import { Text } from "react-native-paper";
import { View } from "react-native";
import { collection, getFirestore, onSnapshot, query } from "firebase/firestore";
import { app } from "../config/firebase";
import { useEffect } from "react";

const tarefas = collection(
    getFirestore(app), 
    "tarefas");

export default function TaskList() {

    const [tasks, setTasks] = useState([]);

        useEffect(() => {
            const queryInstance = query(tarefas);
            const tasksQuery = onSnapshot(
                queryInstance, (snapshot) => {
                    const resultado = snapshot.docs;
                    console.log("desorganizado", snapshot.docs);
                    const listaDeTarefas = resultado.map((doc) => {
                        return{
                            id: doc.id,
                            ...doc.data(),
                        }
                    })
                    setTasks(listaDeTarefas);
                    console.log("organizado", listaDeTarefas);
                }
            )
        tasksQuery();
    },[])

    return(
        <View>
            <Text>Lista de Tarefas</Text>
            <FlatList
                data={[{id:1, titulo: "Tarefa 1"}]}
                renderItem={(item) => (
                    <Text>{item.titulo}</Text>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}