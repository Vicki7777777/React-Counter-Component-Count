import React from "react"
import Counter from "../Counter"
import PropTypes from 'prop-types'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            counters: 0,
            counterInfo: new Array(0).fill(0)
        }

    }



    // componentWillReceiveProps(nextProps) {
    //     if (this.props.number !== nextProps.number) {
    //         this.setState({number: 0})
    //     }
    // }

    onChangeHandle = (event) => {
        let times = event.target.value
        this.setState({
            number: parseInt(times),
            counterInfo: new Array(parseInt(times)).fill(0),
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
            <input type="number" value={this.state.number} onChange={this.onChangeHandle}/>
            <label>total:{this.state.counters}</label>
            <div>{this.state.counterInfo.map((value, id) => <Counter key={id} handleChange={(value) => {
                this.handleChange(value, id)
            }}/>)}</div>
        </div>)
    }
}

export default CounterGroup