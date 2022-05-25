import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from '../../img/seba.jpg';
import './AboutCard.css';

export default function AboutCard() {
    return (
        <Card sx={{ maxWidth: 345 }} className="about-card">
            <CardMedia component="img" height="170" image={Img} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Sebastián Coppola
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    I'm a musician, a teacher, and 2 year ago I got passionate 
                    with web developing. Since then, I've been studding every day 
                    and working free-lance in some web sites. I'm currently taking 
                    a course in the Ayi Academy, learning how to work with React 
                    and NodeJs. You can review my profile following the links below.                 </Typography>
            </CardContent>
            <CardActions className="card-actions">
                <a className="link" href="https://www.linkedin.com/in/sebasti%C3%A1ncoppola/" target='_blank'>
                    <Button size="small">LinkedIn</Button>
                </a>
                <a className="link" href="https://github.com/SebastianCoppola" target='_blank'>
                    <Button size="small">GITHUB</Button>
                </a>
            </CardActions>
        </Card>
    );
}
