import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.number !== state.number) {
    //         return {
    //             number: props.number,
    //             CounterNum: props.number
    //         }
    //     }
    //     return null;
    // }


    static getDerivedStateFromProps(props, nextProps){
        if (props.value !== nextProps.value) {
            return {
                number: 0
            };
        }
    }


    increase = () => {
        this.setState({
            number: this.state.number + 1
        }, this.changeCounter)

    }

    changeCounter = () => {
        this.props.handleChange(this.state.number)
        // (value)=>{this.handleChange(value,id)}
    }

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        }, this.changeCounter)
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