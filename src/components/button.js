import React from 'react';
import styles from '../styles/Button.module.css';

const Button = (props) => 
                <button 
                    className={`${styles.button} ${styles.number}`} 
                    onClick={props.onClick} 
                    data-color={props.color} 
                    data-size={props.size} 
                    data-value={props.value}
                    >
                         {props.label}  
                </button>

export default Button;