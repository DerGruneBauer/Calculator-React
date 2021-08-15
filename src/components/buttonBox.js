import React from 'react';
import styles from '../styles/ButtonBox.module.css';

const ButtonBox = (props) => <div className={styles.buttonBox}> {props.children} </div>

export default ButtonBox;