import React from 'react';
import css from '../Text.module.css';

export const Text = ({ children }) => {
  return <p className={css.text}>{children}</p>
}
