import React, { Component } from 'react'
import {SearchStyle} from './FilterSearchStyle'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'

export class FilterSearch extends Component {

    render() {
        return (
            <>
                <SearchStyle>
                    Search<Search search={this.props.search}/><Filter filter={this.props.filter}/>
                </SearchStyle>
            </>
        )
    }
}

export default FilterSearch
