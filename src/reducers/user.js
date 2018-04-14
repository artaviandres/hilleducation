export default(state = [], payload) => {
    switch(payload.type) {
        case 'add':
            return [...state, payload.user]
        case 'logout':
            state = payload.payload
            return state
        default:
            return state;
    }
}