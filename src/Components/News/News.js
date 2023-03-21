import React from 'react'
import {Card, Button} from "react-bootstrap"
const News = (props) => {
    const news = props.news
    console.log(news);
    const {
        title = "",
        description = "",
        urlToImage = "",
        url = "",
        author =""
    } = news ?? {};
    return (
            <Card className='container p-0 m-4 w-50 mx-auto'>
                <Card.Img className='w-100' variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary" ><a target="_blank" style={{textDecoration: "none"}} className="text-white" href={url}>Read More</a></Button>
                </Card.Body>
            </Card>
    )
}

export default News