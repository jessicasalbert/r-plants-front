import React, { Component } from 'react'

export class Success extends Component {

    state = {
        number: 10
    }

    componentDidMount() {
        this.interval = setInterval(() => {
          console.log(this.state.number)
          this.setState({number: this.state.number - 1})
        }, 1000);
      }

    componentWillUnmount() {
    clearInterval(this.interval);
    }


    render() {
        return (
            <div>
                 Success!
                <p> Redirecting in {this.state.number}...</p>
                 {this.state.number === 0 ?
                 this.props.redirectToWelcome()
                : null}
            </div>
        )
    }
}

export default Success
