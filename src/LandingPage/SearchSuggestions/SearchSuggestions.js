import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions() {
    return (
        <div className={styles.suggestions}>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span><span className={styles.suggestion}>Restaurants</span>
            <span className="icon is-small"><i className="fas fa-cocktail"></i></span><span className={styles.suggestion}>Nightlife</span>
            <span className="icon is-small"><i className="fas fa-concierge-bell"></i></span><span className={styles.suggestion}>Services</span>
            <span className="icon is-small"><i className="fas fa-truck"></i></span><span className={styles.suggestion}>Delivery Services</span>
        </div>
    );
}