import React from 'react'


class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            groupSize: props.groupSize
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.groupSize !== state.groupSize) {
            return {
                number: 0,
                groupSize: props.groupSize
            }
        }
        return null;
    }

    increase = () => {
        this.props.addCounters()
        this.setState(preState => ({
            number: preState.number + 1
        }))

    }


    decrease = () => {
        this.props.reduceCounters()
        this.setState(preState => ({
            number: preState.number - 1
        }))
    }

    getNumber(number) {
        this.setState({number: number})
    }


    render() {
        return (<div>
            <button onClick={this.increase}>+</button>
            <mark>{this.state.number}</mark>
            <button onClick={this.decrease}>-</button>
        </div>)
    }
}

export default Counter