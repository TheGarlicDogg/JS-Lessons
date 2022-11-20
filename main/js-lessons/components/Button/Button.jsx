import React from 'react';
import css from '../Button/Button.module.css'

export const Button = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
        {children}
    </button>
  )
}
