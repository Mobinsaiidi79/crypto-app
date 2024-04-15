import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import './News.css'
import { Container } from '@mui/material'
import NewsBox from '../../components/NewsBox/NewsBox';
export default function News() {
    const [news, setNews]=useState([])
   
    useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7b182e47ce724238beface03e00bc901')
        .then(res=>res.json())
        .then(data=>{
            setNews(data.articles)
        })
    },[])

  return (
    <div className='news'>
       <Container >
      <div className="news__content">
          <h1 className='news__title'>NEWS</h1>
      </div>
      
     <div className='news__items'>
     {
        news.map((news)=>{
          return(

            <NewsBox news={news} key={news.id}/>
          )
        })
      }
     </div>
       </Container>
    </div>
  )
}
