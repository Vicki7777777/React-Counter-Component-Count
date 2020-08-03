import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    increase = () => {
        this.setState({
            number: this.state.number + 1
        },this.changeCounter)

    }

    changeCounter=()=>{
        this.props.handleChange(this.state.number)
    }

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        },this.changeCounter)
    }

    getNumber(number){
        this.setState({number:number})
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
