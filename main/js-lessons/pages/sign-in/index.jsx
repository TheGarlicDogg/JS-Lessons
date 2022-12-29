import React from 'react'
import { Input } from '../../components/UI/Input/Input'
import { Button } from '../../components/UI/Button/Button'
import Link from 'next/link'
import { useState } from 'react'

import css from "./sign-in.module.css";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function FormHandler (e) {
    e.preventDefault();
    fetch("https://norma.nomoreparties.space/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(res=>{
      if (res.ok) return e.json();
      throw Error();
    }, console.log)
    .then(console.log)
  }
  return (
    <form className={css.form} onSubmit={FormHandler}>
      <fieldset className={css.form__inputs}>
        <legend>Вход в аккаунт</legend>
          <Input onChange={(e) => setEmail(e.targe.value)} type="email" placeholder="Почта" value={email}required>
            Почта
          </Input>
          <Input onChange={(e) => setPassword  (e.target.value)} type="password" placeholder="Пароль" value={password}required>
            Пароль
          </Input>
          </fieldset>
          <Link href="/register">Зарегистрироваться</Link>
          <Button type="submit">Войти</Button>
    </form>
  )
}

export default SignIn