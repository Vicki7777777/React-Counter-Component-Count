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

    // componentWillReceiveProps(props, state){
    //     this.setState({
    //         number: props.value
    //     })
    // }




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
        console.log("decrease")
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