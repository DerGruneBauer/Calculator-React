import React from 'react';
import styles from '../styles/Header.module.css';

const Header = (props) =>
    <header className={styles.header}>
        <div className={styles.title}>calc</div>
        <div className={styles.themeSelector}>
            <div className={styles.themeTitle}>THEME</div>
            <div className={styles.allToggles}>
                <div className={styles.individualToggle}>
                    <label>1</label>
                    <label for="themeOne">
                        <input onClick={props.onClick} type="radio" id="themeOne" name="themeSelector" value={props.value[0]} defaultChecked></input>
                    </label>
                </div>
                <div className={styles.individualToggle}>
                    <label>2</label>
                    <label for="themeTwo">
                        <input onClick={props.onClick} type="radio" id="themeTwo" name="themeSelector" value={props.value[1]}></input>
                    </label>
                </div>
                <div className={styles.individualToggle}>
                    <label>3</label>
                    <label for="themeThree">
                        <input onClick={props.onClick} type="radio" id="themeThree" name="themeSelector" value={props.value[2]}></input>
                    </label>
                </div>
            </div>
        </div>
    </header>
    
export default Header;