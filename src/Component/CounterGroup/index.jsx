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
            counters:0
        });
        this.props.reset()
    }


    addCounters = () =>{
        this.props.increase()
    }

    reduceCounters = () =>{
        this.props.decrease()
    }



    render() {
        return (<div>
            <label>numbers of counters:</label>
            <input value={this.state.groupSize} onChange={this.onChangeHandle}/>
            <label>total:{this.props.total}</label>
            <div>{new Array(this.state.groupSize).fill(0).map((value, id) => <Counter groupSize={this.state.groupSize}
                                                                     addCounters={this.addCounters}
                                                                     reduceCounters={this.reduceCounters}
                                                                     key={id} />)}

            </div>
        </div>)
    }
}

export default CounterGroup