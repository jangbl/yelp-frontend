import React from 'react';
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <img src={logo} className={styles.logo} alt='belb logo' />
            <SearchBar small/>
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    );
}