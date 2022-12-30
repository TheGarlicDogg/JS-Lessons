import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Nav } from '../components/Header/Nav/Nav';
import { Button } from '../components/UI/Button/Button';
import css from './index.module.css'
import { Card } from '../components/Cards/Card';

const IndexPage = ({ data }) => {
  return (
    <Layout title="Блог">
      <header>
        <Nav />
      </header>
      <main className={css.main}>
        <div className={css.main__title}>
          <h1 className={css.main__logo}>The blog</h1>
          <Button>Check this!</Button>
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