import React from "react"
import Counter from "../Counter"

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            groupSize: this.props.groupSize,
            counters: 0,
            counterInfo: new Array(0).fill(0)
        }
    }


    onChangeHandle = (event) => {
        this.setState({
            groupSize: parseInt(event.target.value),
            counterInfo: new Array(parseInt(event.target.value)).fill(0),
            counters:0
        });
    }
    handleChange = (value, id) => {
        let temp = this.state.counterInfo
        temp[id] = value
        this.calculateNumbers(temp);
    }

    calculateNumbers = (numberCount) => {
        let result = 0
        for (let i of numberCount) {
            result += i
        }
        this.setState({
            counters: result
        })
    }

    render() {
        return (<div>
            <label>numbers of counters:</label>
            <input value={this.state.groupSize} onChange={this.onChangeHandle}/>
            <label>total:{this.state.counters}</label>
            <div>{this.state.counterInfo.map((value, id) => <Counter groupSize={this.state.groupSize}  key={id} handleChange={(value) => {
                this.handleChange(value, id)
            }}/>)}</div>
        </div>)
    }
}

export default CounterGroup