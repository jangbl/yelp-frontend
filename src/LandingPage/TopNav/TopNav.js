import React from 'react';
import styles from './TopNav.module.css';

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className={styles.right}>
                <span>Login</span>
                <button className='button'>Sign up</button>
            </div>
        </div>
    );
}