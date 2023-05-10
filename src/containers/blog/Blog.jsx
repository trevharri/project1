import React from 'react';
import Article from '../../components/article/Article'
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const articleInfo = {
  date: "Sep 26, 2021",
  title: "CryptoStop and Block Chain are the future. Let's exlore how we can use it."
}

const imagesB = [blog02, blog03, blog04, blog05]


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog" >
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article imgUrl={blog01} date={articleInfo.date} title={articleInfo.title} />
        </div>
        <div className="gpt3__blog-container__groupB">
          {imagesB.map((img, index) => {
            return <Article imgUrl={img} date={articleInfo.date} title={articleInfo.title} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog