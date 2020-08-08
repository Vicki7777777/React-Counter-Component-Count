import {connect} from 'react-redux'
import CounterGroup from '../components/CounterGroup'
import {changeGroupSize} from "../actions";

const mapStateToProps = (state) => ({
    groupSize: state.groupSize,
    total: state.total
})

const mapDispatchToProps = (dispatch) => ({
    changeGroupSize: (groupSize) => {
        dispatch(changeGroupSize(groupSize))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)