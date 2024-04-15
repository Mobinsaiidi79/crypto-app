import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './NewsBox.css'
export default function NewsBox({news}) {
  return (
    <Card sx={{ maxWidth: 300 ,maxHeight:500}} className='Card'>
      <CardMedia
        sx={{ height: 140 }}
        image={news.urlToImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" className='news-author' component="div">
         {news.author}
        </Typography>
        <Typography gutterBottom variant="p" className='news-title' component="div">
         {news.title}
        </Typography>
       
      </CardContent>
      <CardActions >
          <a href={news.url} target='_blank'  >
        <Button size="small">Learn More</Button>
           </a>
       
      </CardActions>
    </Card>
  )
}
