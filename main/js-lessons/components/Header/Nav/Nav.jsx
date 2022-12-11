import React from 'react';
import { ButtonLink } from '../../UI/ButtonLink/ButtonLink';

import css from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={css.nav}>
        <h1 className={css.nav__logo}>Logo</h1>
        <ul className={css.nav__list}>
            <li>
                <ButtonLink href="/profile">Profile</ButtonLink>
            </li>
            <li>
                <ButtonLink href="/contacts">Contact</ButtonLink>
            </li>
            <li>
                <ButtonLink href="/about">About</ButtonLink>
            </li>
            <li>
                <ButtonLink href="/sign-in">Sign in</ButtonLink>
            </li>
        </ul>
    </nav>
  );
};
