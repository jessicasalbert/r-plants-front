import React, { Component } from 'react'
import {SearchStyle, FilterWrapper, Heading} from './FilterSearchStyle'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'

export class FilterSearch extends Component {

    render() {
        return (
            <>
            <Heading>store</Heading>
            <FilterWrapper>
                <SearchStyle>
                    <Search searchTerm={this.props.searchTerm} search={this.props.search}/>
                    {/* <Filter isFiltered={this.props.isFiltered} filter={this.props.filter}/> */}
                </SearchStyle>
            </FilterWrapper>
            </>
        )
    }
}

export default FilterSearch
