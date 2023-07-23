import { Button } from '@mui/material';
import React, { FC } from 'react'

interface Btn {
    text: string;
    onClick?: React.MouseEventHandler; // function to be called when button is clicked. Optional parameter, defaults to
}

const ButtonA:FC<Btn> = ({text, onClick}) => {
  return (
    <Button size="small" onClick={onClick} variant='outlined'>{text}</Button>
  )
}

export default ButtonA