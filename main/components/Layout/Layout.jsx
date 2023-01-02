import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getCookie } from '../../utils/setCookie';
import { useRouter } from 'next/router';



export const Layout = ({children, title, onlyUnAuth}) => {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    if (onlyUnAuth && getCookie("refreshToken")){
      router.push("/").then(() => {
        setChecked(true)
      });
    } else {
      setChecked(true);
    }
  }, [])
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        {isChecked && children}
    </>
  )
}
