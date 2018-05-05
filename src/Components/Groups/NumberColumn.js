import React, {Component, Children, PropTypes} from 'react';
import Vote from "./Vote";

class NumberColumn extends Component {

    _getNumbers() {
        let numbers = []
        let increment = 0

        while (increment < 10) {
            numbers.push(<div>{increment}</div>)
            increment++
        };

        return numbers
    }

    render() {
        const { current } = this.props;
        console.log(this.props);

        return (
            <div className = "vote__column">
                {/* <Motion style = {{y: spring(current * 10)}}>
                    {({y}) =>
                        <div
                            style = {{ transform: `translateY(${-y}%)` }}
                        >
                            {this._getNumbers()}
                        </div>
                    };
                </Motion> */}
            </div>
        )
    }
}

export default NumberColumn;