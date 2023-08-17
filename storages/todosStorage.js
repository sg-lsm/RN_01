import AsyncStorage from "@react-native-community/async-storage";


const key = 'todos';

const todosStorage = {
    async get(){
        try{
            const rawTodos = await AsyncStorage.getItem(key);
            if(!rawTodos){
                throw new Error("no save todos data");
            }
            const savedTodos = JSON.parse(rawTodos);
            return savedTodos;
        }catch(e){
            console.log("Failed to save todos");
        }
    },
    async set(data){
        try{
            await AsyncStorage.setItem(key, JSON.stringify(data));
        }catch(e){
            throw new Error("Failed to load todos")
        }
    }
}

export default todosStorage;