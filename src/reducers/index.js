import { combineReducers } from 'redux'
import groupSize from './groupSize'
import total from './total'

export default combineReducers({
    groupSize,
    total
})