import React from 'react'
import {SearchStyle, FilterWrapper, Heading} from './FilterSearchStyle'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'

export default function FilterSearch(props) {
    return (
        <>
        <Heading>store</Heading>
        <FilterWrapper>
            <SearchStyle>
                <Search searchTerm={props.searchTerm} search={props.search}/><Filter isFiltered={props.isFiltered} filter={props.filter}/>
            </SearchStyle>
        </FilterWrapper>
        </>
    )
}