import {connect} from 'react-redux'
import {changeGroupSize, decrease, increase,reset} from "../actions";
import CounterGroup from "../Component/CounterGroup";

const mapStateToProps = (state) => ({
    groupSize: state.groupSize,
    total: state.total
})
const mapDispatchToProps = (dispatch) => ({
    changeGroupSize: (groupSize) => {
        dispatch(changeGroupSize(groupSize))
    },
    increase: () => {
        dispatch(increase())
    },
    decrease: () =>{
        dispatch(decrease())
    },
    reset: () =>{
        dispatch(reset())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)