import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import {List} from "../components/List/List"

export default function IndexPage( {data} ) {
  const [content, setContent] = useState(data);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [page, setPage] = useState(0);
  
  function handleClick(e) {
    e.preventDefault();
    setContent(lastState => [{url: value1, title: value2}, ...(lastState || []), ]);
  }
  
  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" value={value1} onChange={e => setValue1(e.target.value)}/>&nbsp;
        <input type="text" value={value2} onChange={e => setValue2(e.target.value)}/>&nbsp;
        <Button type="submit">Добавить изображение</Button><br/>
        <Button type="button" onClick={() => setPage(p => p+1)}>
          Страница {page+1}
        </Button>
      </form>
      {content && <List content={content.slice(page*10, (page+1)*10)} />} 
    </div>
  )
}
// {content && <List content={content.slice(page*10, (page+1)*10)} />}
export async function getStaticProps(context){
  console.log("start")
  const obj = await fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json());
  return {
    props: {
      data: obj,
    },
  };
} 
