import React, { Component } from 'react'

export class Search extends Component {

    state = {
        search: ""
    }

    localSearchHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }, this.props.search(this.state.search))
    }

    render() {
        return (
            <div>
                Search me
                <input onChange={this.localSearchHandler} type="text" name="search" value={this.state.search}/>
            </div>
        )
    }
}

export default Search
