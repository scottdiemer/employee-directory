import React from 'react'

const Card = ({ name, email, phone, picture }) => {
  return (
    <div className='tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-2'>
      <img src={picture} alt='employees' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  )
}

export default Card
