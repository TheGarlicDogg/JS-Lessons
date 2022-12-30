import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout/Layout';
import { Button } from '../../components/UI/Button/Button';
import { Input } from '../../components/UI/Input/Input';
import css from '../sign-in/sign-in.module.css';
import { postFetch } from '../../utils/Fetch';
import { setCookie } from '../../utils/setCookie';






const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
  }, []);

  function FormHandler(e) {
    e.preventDefault();
    setLoading(true);
    postFetch("https://norma.nomoreparties.space/api/auth/register", {
      email,
      password,
      name,
    }).then(res => {   
      setCookie("accessToken", res.accessToken, 1);
      setCookie("refreshToken", res.refreshToken);
      setLoading(false);
      router.push("/");
    });
  }

  return (
    <Layout title="Sign in" onlyUnAuth>
      <form className={css.form} onSubmit={FormHandler}>
        <fieldset className={css.form__inputs}>
          <legend>Регистрация</legend>
            <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" value={email} required>
              E-mail
            </Input>
            <Input onChange={e => setName(e.target.value)} type="text" placeholder="Name" value={name} required>
              Name
            </Input>
            <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password} required>
              Password
            </Input>
            </fieldset>
            <Link href="/sign-in">Sign in</Link>
            <Button type="submit" disabled = {isLoading}>{isLoading ? "Loading..." : "Sing up" }</Button>
      </form>
    </Layout>
  )
}

export default Register