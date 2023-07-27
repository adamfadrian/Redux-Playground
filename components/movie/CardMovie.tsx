import React, { FC } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    title: string;
    description:string
    image:string
    release: string
    children?: React.ReactNode;
    handleAddFav?: React.MouseEventHandler;
    handleRemoveFav?: React.MouseEventHandler;
}

const CardMovie:FC<Props> = ({title, image, description, release, handleAddFav, handleRemoveFav, children}) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'rgb(226 232 240 / var(--tw-bg-opacity))',padding: '5px', }}>
    <CardMedia
      component="img"
      sx={{ height: 450 , backgroundPosition: 'cover', backgroundSize: 'cover' }}
      image={image}
      title="green iguana"
    />
    <CardContent className='flex flex-col gap-2'>
      <Typography
      sx={{ height: '1.5rem', lineHeight: '1.5rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' }}
       gutterBottom
        variant="h5" component="div" >
        {title}
      </Typography>
      <Typography variant="body2" >
        {release}
      </Typography>

      <Typography variant="body2" color="text.secondary"  sx={{ height: '3rem', lineHeight: '1.5rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      {children}
    </CardActions>
  </Card>
  )
}

export default CardMovie