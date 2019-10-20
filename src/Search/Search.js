import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';

export function Search() {
    return (
        <div>
            <NavBar/>
            <SubNav/>
            <SearchResultsSummary />
            <SearchResults/>
        </div>
    );
}