import React, { Component } from 'react'
import SearchStyling from './SearchStyle'

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
            <>
                Search <SearchStyling onChange={this.localSearchHandler} type="text" name="search" value={this.state.search}></SearchStyling>
            </>
        )
    }
}

export default Search
