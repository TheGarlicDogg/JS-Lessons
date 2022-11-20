import React from 'react'
import css from '../List/List.module.css';

export const List = ( {content}) => {
  return (
  <ul className={css.list}>
    {content.map((el, i) => (
        <li className={css.li} key={i}><img  className={css.img} src={el.url} />{el.title}</li>
    ))}
    
  </ul> 
  );
}
