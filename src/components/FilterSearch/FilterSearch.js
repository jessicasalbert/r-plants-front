import React, { Component } from 'react'
import {SearchStyle, FilterWrapper} from './FilterSearchStyle'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'

export class FilterSearch extends Component {

    render() {
        return (
            <FilterWrapper>
                <SearchStyle>
                    <Search search={this.props.search}/><Filter filter={this.props.filter}/>
                </SearchStyle>
            </FilterWrapper>
        )
    }
}

export default FilterSearch
