import React from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';
import {Spinner} from '../../Spinner/Spinner.js';

export function SearchResults(props) {
    let searchResults = <Spinner/>;
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
    }

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}