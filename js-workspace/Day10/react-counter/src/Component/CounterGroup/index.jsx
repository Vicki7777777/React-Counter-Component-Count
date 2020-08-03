import React from "react"
import Counter from "../Counter"

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: props.number,
            counters: 0
        }

    }

    onChangeHandle = (event) => {
        let times = event.target.value
        this.setState({
            number: parseInt(times)
        });
    }
    handleChange = (value)=>{
        let numberCount = []; 
        numberCount.push(value);
        this.calculateNumbers(numberCount);
    }

    calculateNumbers = (numberCount) =>{
        for (let i in numberCount) {
            this.setState({
                counters:  + numberCount[i]
            })
          }
    }

    render() {
        return (<div>
            <label>numbers of counters:</label>
            <input type="text" value={this.number} onChange={this.onChangeHandle}></input>
        <label>total:{this.state.counters}</label>
        <div>{new Array(this.state.number).fill(0).map((value, times) => <Counter key={times} handleChange={this.handleChange} />)}</div>
        </div>)
    }
}
export default CounterGroup