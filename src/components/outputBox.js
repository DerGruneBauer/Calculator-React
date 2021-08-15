import React from 'react';
import styles from '../styles/OutputBox.module.css';

const OutputBox = (props) => <div className={styles.outputBox}><div className={styles.output}>{props.data}</div></div>

export default OutputBox;