import { gql, GraphQLClient } from "graphql-request"

const client = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clv5bpgyy00g207v3cypkey10/master');

const createNotes = async (title: string, content: string, time: string, date: string) => {
    const mutationQuery = gql`
    mutation MyMutation {
        createNote(data: {title: "`+title+`", content: "`+content+`", time: "`+time+`", date: "`+date+`"}) {
            id
            title
            content
            time
            date
        }
        publishManyNotes
    }
    `

    try {
        const result = await client.request(mutationQuery);
        return result;
    } catch (error) {
        throw error
    }
}

const getNotes = async () => {
    const query = gql`
        query MyQuery {
            notes {
                id
                title
                content
                time
                date
            }
        }
    `

    try {
        const result = await client.request(query);
        return result;
    } catch (error) {
        throw error
    }
}

const getNoteById = async (id: string) => {
    const query = gql`
        query MyQuery {
            notes(where: {id: "`+id+`"}) {
                id
                title
                content
                time
                date
            }
        }
    `

     try {
        const result = await client.request(query);
        return result;
    } catch (error) {
        throw error
    }
    
}

const updateNoteById = async (id: string, title: string, content: string, time: string, date: string ) => {
    const mutationQuery = gql`
        mutation MyMutation {
            updateNote(data: {title: "`+title+`", content: "`+content+`", time: "`+time+`", date: "`+date+`"}, 
            where: {id: "`+id+`"}) {
                id
                title
                content
                time
                date
            }
        }
    `

    try {
        const result = await client.request(mutationQuery);
        return result;
    } catch (error) {
        throw error
    }
}

const deleteNoteById = async (id: string) => {
    const mutationQuery = gql`
        mutation MyMutation {
            deleteNote(where: {id: "`+id+`"}) {
                id
            }
        }
    `

    try {
        const result = await client.request(mutationQuery);
        return result;
    } catch (error) {
        throw error
    }
}

// Todo Query

const createTodos = async (todo: string) => {
    const mutationQuery = gql`
        mutation createTodos {
            createTodo(
                data: {todo: "`+todo+`"}
            ){
                id
            }
            publishManyTodos
        }
    `

    try {
        const result = await client.request(mutationQuery);
        return result;
    } catch (error) {
        throw error
    }
}

const getTodos = async () => {
    const query = gql`
        query GetAllTodos {
            todos {
                id
                todo
            }
        }      
    `

    try {
        const result = await client.request(query);
        return result;
    } catch (error) {
        throw error
    }
}

const getTodoById = async (id: string) => {
    const query = gql`
        query GetTodoById {
            todos(
            where: {id: "`+id+`"})
            {
                id
                todo
            }
        }
    `

    try {
        const result = await client.request(query);
        return result;
    } catch (error) {
        throw error
    }
}

const updateTodoById = async (id: string, newTodo: string) => {
    const mutationQuery = gql`
        mutation updateToById {
            updateTodo(
                where: {id: "`+id+`"}
                data: {todo: "`+newTodo+`"}
            ) {
                id
                todo
            }
        }
    `
    try {
        const result = await client.request(mutationQuery);
        return result;
    } catch (error) {
        throw error
    }
}

const deleteToById = async (id: string) => {
    const mutationQuery = gql`
        mutation MyMutation {
            deleteTodo(where: {id: "`+id+`"}) {
                id
            }
        }
    `
    try {
        const result = await client.request(mutationQuery);
        return result;
    } catch (error) {
        throw error
    }
}

export default {
    createNotes,
    getNotes,
    getNoteById,
    updateNoteById,
    deleteNoteById,
    createTodos,
    getTodos,
    getTodoById,
    updateTodoById,
    deleteToById
}

// const [slider, setSlider] = useState([])
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         getSliders();
//     }, []);

//     const getSliders = () => {
//         GlobalApi.getSlider()
//         .then((resp: any) => setSlider(resp.sliders))
//         .catch((err) => console.error('Error', err))
//         .finally(() => setLoading(false))
//     }

//     const sliderData: ListRenderItem<Sliders> = ({item, index}) => (
//         <View style={{marginRight: 10, marginTop: 10}}>
//             <Image source={{uri: item.image?.url}} style={styles.sliderImage}/>
//         </View>
//     )