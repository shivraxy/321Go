import React, {Component, Children, PropTypes} from 'react';
import NumberColumn from "./NumberColumn";

const Arrow = ({direction, ...props}) => (
    <svg viewBox = "0 0 28 12" {...props}>
        <polyline
            points = {
                direction === 'up' ?
                "0.595,11.211 14.04,1.245 27.485,11.211" :
                "27.485,0.803 14.04,10.769 0.595,0.803"
            }
        />
    </svg>
)

Arrow.defaultProps = {
    direction: 'up'
}

class Vote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // number from which animation starts, not the starting count
            count: 10
        };
    }

    componentDidMount() {
        // default starting count
        this.setState({ count: 0 })
    }
    
    _getCount() {
        const counts = this.state.count.toString().split('');

        return counts.map(_count => {
            if (_count === '-') {
                return <span className='vote__column'>-</span>
            } else {
                return <NumberColumn current = {parseFloat(_count)} />
            };
        });
    }

render() {
    const { count } = this.state

    return(
        <div className='vote'>
            <Arrow
                direction='up'
                className='vote__arrow vote__arrow--up'
                onClick={() => this.setState({ count: count + 1})}
            />
            <div className='vote__columns'>
                {this._getCount()}
            </div>
            <Arrow
                direction='down'
                className='vote__arrow vote__arrow--down'
                onClick={() => this.setState({ count: count - 1 })}
            />
        </div>
    );
    }
}

export default Vote;