import Link from 'next/link'
import React from 'react'

import { clx  } from '../../../utils/clx';
import css from './ButtonLink.module.css';

export const ButtonLink = ({children, className, ...props}) => {
  return (
    <Link className={clx(css.link, className)} {...props}>
        {children}
    </Link>
  );
};
