const groupSize = (state = 0, action) => {
    switch (action.type) {
        case 'CHANGE_GROUP_SIZE':
            return action.groupSize
        default:
            return state
    }
}

export default groupSize