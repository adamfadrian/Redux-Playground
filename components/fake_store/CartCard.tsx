import React, { FC } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export interface CardCart {
    category?: string;
    image?: string;
    price?: number;
    title?: string;
    onClick?: React.MouseEventHandler;
}

const CartCard: FC<CardCart> = ({ image, category, price, onClick , title}) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 , }} className='border p-2 '>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title={category}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                       $ {price}
                    </Typography>
                    <Typography 
                     sx={{ height: '1.5rem', lineHeight: '1.5rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' }}
                    variant="body2"
                     color="text.secondary"
                     >
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onClick} variant='outlined'>Add To Cart</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartCard