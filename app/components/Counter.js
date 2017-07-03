import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
        <div>
          <h1>React, Redux, Boostrap and GoLang minimal template</h1>
          <p className="lead">
            Clicked: {value} times
            {' '}
            <button className="btn btn-success" onClick={onIncrement}>
              +
            </button>
            {' '}
            <button className="btn btn-warning" onClick={onDecrement}>
              -
            </button>
            {' '}
            <button className="btn btn-info" onClick={this.incrementIfOdd}>
              Increment if odd
            </button>
            {' '}
            <button className="btn btn-danger" onClick={this.incrementAsync}>
              Increment async
            </button>
          </p>
        </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
