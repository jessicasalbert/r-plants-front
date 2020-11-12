import React, { Component } from 'react'
import SearchStyling from './SearchStyle'

export class Search extends Component {

    state = {
        search: ""
    }

    localSearchHandler = (e) => {
        // this.setState({
        //     search : e.target.value
        // })
        
        this.props.search(e.target.value)
    }
        

    render() {
        return (
            <>
                <SearchStyling onChange={this.localSearchHandler} placeholder="Search houseplants..." type="text" name="search" value={this.props.searchTerm}></SearchStyling>
            </>
        )
    }
}

export default Search
