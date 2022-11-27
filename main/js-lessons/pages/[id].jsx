import React from 'react'
import { useRouter } from 'next/router'

const BlogItem = ({data}) => {
  const router = useRouter();
    return (
      <div>
        <div><img src={data.url}/></div>
        <div>{data.title}</div>
      </div>
    
    
  )
}

export default BlogItem;

export async function getStaticProps(context){
  const article = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`).then(res => res.json());
  return {
    props: {
      data: article,
    },
  };
}
let res= Array.from({length:400}) // массив на 500 элементов
res=res.map((el, i) =>{
  return {params: {id:String(i)}}
}); // массив элементов от 0 до 499
export async function getStaticPaths(context){
  return{
    paths: res,
    fallback: false,
  };
}

