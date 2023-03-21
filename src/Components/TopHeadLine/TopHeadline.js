import React, { useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap'
import News from '../News/News';

const TopHeadline = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=1eca454ad824476899d8d6ce250d4d8f")
        .then(res=> res.json())
        .then(data=> setItem(data.articles))

    }, [])
    return (
        <div>
            <h1 className='text-center'>Top Headline {items.length}</h1>
            {
                items.map(item=><News news={item}></News>)
            }
        </div>
    )
}

export default TopHeadline