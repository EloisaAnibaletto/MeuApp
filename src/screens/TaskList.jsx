import { FlatList, ScrollView, View } from "react-native";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { List, Text, TouchableRipple } from "react-native-paper";

export default function AulaTaskListar() {
    const [tarefas, setTarefas] = useState([]);

    const tarefasRef = collection(db, "tarefas")

    useEffect(() => {

        const q = query(tarefasRef)
        const unsubscribe = onSnapshot(
            q, 
            (querySnapshot) => { 
                const listaDeTarefas = querySnapshot.docs.map(
                    (doc) => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )
                )

                setTarefas(listaDeTarefas)
            }
        )
        return () => unsubscribe()
    }, [])

    function handleDelete(id) {
        console.log("vou deletar mesmo>", id)
        const docRef = doc(db, "tarefas", id)
        deleteDoc(docRef)
            .then(() => console.log("Documento deletado com sucesso"))
            .catch((error) => console.log(error))
    }

    return (
        <ScrollView>
            <FlatList
                data={tarefas}
                renderItem={({ item }) => (
                    <List.Item
                        title={item.nomeDaTarefa}
                        //description={"Descricao da tarefa acima"}
                        onPress={() => console.log("Pressionado")}
                        right={(props) => (
                            <TouchableRipple
                                onPress={() => handleDelete(item.id)}
                            >
                                <List.Icon
                                    {...props}
                                    icon="delete"
                                    size={28}
                                />
                            </TouchableRipple>
                        )}
                    />
                )}
            />
        </ScrollView>
    )
}