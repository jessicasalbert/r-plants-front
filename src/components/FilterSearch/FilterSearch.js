import React, { Component } from 'react'
import {SearchStyle} from './FilterSearchStyle'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'

export class FilterSearch extends Component {

    render() {
        return (
            <>
                <SearchStyle>
                    <Filter filter={this.props.filter}/>
                    <Search search={this.props.search}/>
                </SearchStyle>
            </>
        )
    }
}

export default FilterSearch
