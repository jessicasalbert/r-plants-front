import React, { Component } from 'react'

export class Search extends Component {

    state = {
        search: ""
    }

    localSearchHandler = (e) => {
        console.log(e.target.value)
        this.setState({
            search : e.target.value
        })
        
        this.props.search(e.target.value)
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
