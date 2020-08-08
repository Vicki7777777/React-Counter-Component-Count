const total = (state = 0, action) => {
    switch (action.type) {
        case 'DECREASE':
            return state - 1
        case 'INCREASE':
            return state + 1
        case 'RESET_TOTAL':
            return 0
        default:
            return state
    }
}

export default total