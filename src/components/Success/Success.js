import React, { Component } from 'react'

export class Success extends Component {

    state = {
        number: 5
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log(this.state.number)
            this.setState({number: this.state.number - 1})
        }, 500);
      }

    componentWillUnmount() {
    clearInterval(this.interval);
    }


    render() {
        return (
            <div>
                <h2>Success!</h2>
                <p>Your order is processing: #{this.props.order_number} </p>
                <p> Redirecting in {this.state.number}...</p>
                {this.state.number === 0 ?
                this.props.redirectToWelcome()
                : null}
            </div>
        )
    }
}

export default Success
