import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import styles from './NavBar.scss';

function NavBar({ settingsToggled, navList, toggleSettings }){
    return (
    <div>
      <div className={styles.navhat}></div>
        <div className={styles.hiddenNavOpen}>
          <div className={styles.navContent}>
            <div className={styles.categories}>
              <div className={styles.title}>
                Categories
                <div className={styles.back} onClick={toggleSettings}>
                  <svg enableBackground="new 0 0 32 32" height="32px" id="Ð¡Ð»Ð¾Ð¹_1" version="1.1" viewBox="0 0 32 32" width="20px" 
                  space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <path clipRule="evenodd" d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z" fill="#121313" fillRule="evenodd" id="Arrow_Forward"/>
                  </svg>
                </div>
              </div>
              <div className={styles.list}>
                {navList.map((item, index) => <button key={index} className={styles.item}>{item.title}</button>)}
              </div>
            </div>
            <div className={styles.filterBy}>
              <div className={styles.title}>Filter by</div>
              <div className={styles.filterItems}>
                <button className={styles.item}>relevance</button>
                <button className={styles.item}>popularity</button>
                <button className={styles.item}>by date</button>
                <button className={styles.item}>by rate</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    )
}

export default NavBar;
