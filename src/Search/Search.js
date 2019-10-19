import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';

export function Search() {
    return (
        <div>
            <NavBar/>
            <SubNav/>
            <SearchResultsSummary term='burgers' location='berlin'/>
        </div>
    );
}