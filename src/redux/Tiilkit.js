
const toolkitSlice = createSlice({
    name:'toolkit',
    initialState: {
        count: 0,
        todos: ['1','2']
    },
    reducers: {
        increment(state){
            state.count = state.count + 1
        },
        decrement(state){
            state.count = state.count -1 
        },
        clear(state){
            state.count = 0
        },
        addTodo(state, action){
            state.todos.push(action.payload)
        },
        removeLast(state){
            state.todos.pop()
        }
    }
})

export default toolkitSlice.reducers
export const {increment, decrement, clear, addTodo, removeLast} = toolkitSlice.action;