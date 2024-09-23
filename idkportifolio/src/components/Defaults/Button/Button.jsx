/* eslint-disable react/prop-types */
// Button.js
import styles from './Button.module.css'; // Create a separate CSS module for button styles

function Button({ onClick, children }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
