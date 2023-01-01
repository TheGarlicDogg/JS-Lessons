import React from 'react'
import { Input } from '../../components/UI/Input/Input'
import { Button } from '../../components/UI/Button/Button'
import Link from 'next/link'
import { useState } from 'react'
import { postFetch } from '../../utils/Fetch'
import { setCookie } from '../../utils/setCookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import css from "./sign-in.module.css";
import { Layout } from '../../components/Layout/Layout'




const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
  }, [])

  function FormHandler (e) {
    e.preventDefault();
    setLoading(true);
    postFetch("https://norma.nomoreparties.space/api/auth/login", {
      email,
      password,
    }).then(res => {   
      setCookie("accessToken", res.accessToken, 1);
      setCookie("refreshToken", res.refreshToken);
      setLoading(false);
      router.push("/");
    })
  }
  return (
    <Layout title="Sign in" onlyUnAuth>
      <form className={css.form} onSubmit={FormHandler}>
        <fieldset className={css.form__inputs}>
          <legend>Вход</legend>
            <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" value={email}required>
              E-mail
            </Input>
            <Input onChange={(e) => setPassword  (e.target.value)} type="password" placeholder="Password" value={password}required>
              Password
            </Input>
            </fieldset>
            <Link href="/register">Sign Up</Link>
            <Button type="submit" disabled = {isLoading}>{isLoading ? "Loading..." : "Sign in" }</Button>
      </form>
    </Layout>
  )
}

export default SignIn