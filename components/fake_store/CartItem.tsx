import React, { FC } from 'react'
import ButtonA from '../ButtonA'

type CartItemProps = {
  id: number
  quantity: number
  image: string
  category: string
  price: number
  onClick: React.MouseEventHandler
}

const CartItem: FC<CartItemProps> = ({ id, quantity = 1, image, category, price, onClick }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between border rounded p-2' key={id}>
        <div className='flex gap-4 items-center' >
          <img src={image} width={40} height={40} alt={category} />
          <div className='flex flex-col'>
            <div className='flex'>
              <h1>{category}</h1>
              <span>x{quantity}</span>
            </div>
            <h1>${price}</h1>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <h1>$ total</h1>
          <ButtonA text='x' onClick={onClick} />
        </div>
      </div>
    </div>
  )
}

export default CartItem


{/* <CardContent className='flex gap-3 '>
<Button
    onClick={handleDecrement}
    variant='outlined'
    style={{ maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px' }}>-</Button>
<Typography>
    {quantity}
</Typography>
<Button
    onClick={handleIncrement}
    variant='outlined'
    style={{ maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px' }}>+</Button>
</CardContent> */}