import React from 'react';
import { clx } from '../../../utils/clx';
import css from './Button.module.css';

export const Button = ({children, className, ...props}) => {
  return (
    <button className={clx(css.button, className)} {...props}>{children}</button>
  );
};
