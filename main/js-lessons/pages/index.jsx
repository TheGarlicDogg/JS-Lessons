import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Nav } from '../components/Header/Nav/Nav';
import { Button } from '../components/UI/Button/Button';
import { Card } from '../components/Cards/Card';
import { cardsMock } from '../constants/mock';
import css from './index.module.css'

const IndexPage = () => {
  return (
    <Layout title="indexpage">
      <header>
        <Nav />
      </header>
      <main className={css.main}>
        <div className={css.main__title}>
          <h1 className={css.main__logo}>The blog</h1>
          <Button>Check this!</Button>
        </div>
        <section className={css.cards}>
          {cardsMock.map(card => (
            <Card key={card.id} {...card}/>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;