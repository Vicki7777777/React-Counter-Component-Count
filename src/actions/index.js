export const changeGroupSize = (groupSize) => {
    return {
        type: 'CHANGE_GROUP_SIZE',
        groupSize: groupSize
    }
}
export const increase = () => {
    return {
        type: 'INCREASE'
    }
}
export const decrease = () => {
    return {
        type: 'DECREASE'
    }
}
export const RESET = () => {
    return {
        type: 'RESET'
    }
}