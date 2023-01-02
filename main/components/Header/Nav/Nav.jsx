import React, { useEffect, useState } from 'react';
import { ButtonLink } from '../../UI/ButtonLink/ButtonLink';
import { eraseCookie, getCookie } from '../../../utils/setCookie';
import css from "./Nav.module.css";
import { useRouter } from 'next/router';
import { postFetch } from '../../../utils/Fetch';

export const Nav = () => {
    const [isLogin, setLogin] = useState(!!getCookie("refreshToken"));
    const router = useRouter();
    useEffect(() => {
        setLogin(!!getCookie("refreshToken")) 
    }, [getCookie("refreshToken")]);

    function logout(e) {
        e.preventDefault();
        postFetch("https://norma.nomoreparties.space/api/auth/logout",{
            token: getCookie("refreshToken")
        }).then(res => {
            console.log(res);
            eraseCookie("refreshToken");
            eraseCookie("accessToken");   
            router.reload();         
        })
        console.log("ss");
        router.reload();
    }

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
                {!isLogin && (
                <li>
                    <ButtonLink href="/sign-in">Sign in</ButtonLink>
                </li>
                )}
                {isLogin && (
                <li>
                    <ButtonLink href="/sign-in" onClick={logout}>Sign out</ButtonLink>
                </li>
                )}
            </ul>
        </nav>
    );
};
