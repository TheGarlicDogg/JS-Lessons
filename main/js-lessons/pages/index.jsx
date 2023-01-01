import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Nav } from '../components/Header/Nav/Nav';
import { Button } from '../components/UI/Button/Button';
import css from './index.module.css'
import { Card } from '../components/Cards/Card';
import { getFetch, postFetch } from '../utils/Fetch';
import { getCookie, setCookie } from '../utils/setCookie';

const IndexPage = ({ data }) => {
  const [userInfo, setUserInfo] = useState({email: "", name: ""});
  useEffect(() => {
    const sendUser = () => {
      getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken"))
      .then(res => {
        setUserInfo({email: res.user.email, name: res.user.name})
      }); 
    }

    if (getCookie("refreshToken")){
      if (!getCookie("accessToken")){
        postFetch("https://norma.nomoreparties.space/api/auth/token", {
          token: getCookie("refreshToken"),
        }).then(res => {
          console.log("update res", res)
          setCookie("accessToken", res.accessToken, 1);
          setCookie("refreshToken", res.refreshToken);
          sendUser();
        });
      } else {
        sendUser();
      }
    }
  },[]);

  return (
    <Layout title="Блог">
      <header>
        <Nav />
      </header>
      <main className={css.main}>
        <div className={css.main__title}>
          <h1 className={css.main__logo}>The blog</h1>
          <Button>Check this!</Button>
          <div className={css.main__info} >
            <span className={css.main__logo}>{userInfo.email}</span>
            <span className={css.main__logo}>{userInfo.name}</span>
          </div>
        </div>
        <section className={css.cards}>
          {data.map((el, i) => (
            <Card key={i} id ={i} {...el} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export async function getStaticProps(context) {
  let result = await fetch("https://leti.kzteams.ru/api/blog/page")
    .then(res =>{
      if (res.ok) return res.json();
      else throw Error(res.statusText);
    })
    .catch(err => console.error(err));

  result = result.map(a => ({ ...a, data: ""}));
  
  if (!Array.isArray(result)) {
    return {
      props: {
        data: [],
      },
      revalidate: 100,
     };
  }

  return {
    props: {
      data: [...result],
    },
    revalidate: 100,
   };
}

export default IndexPage;