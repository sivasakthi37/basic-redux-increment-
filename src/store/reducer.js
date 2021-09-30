
const initailData = {
    count: 0,


}

const reducer = (state = initailData, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            console.log("action", action);
            return { ...state, count: state.count + 1 }
        }
        case 'DECREMENT': return state - 1
        case 'RESET': return 0; default: return state

    }
}
export default reducer;