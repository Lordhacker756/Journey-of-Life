import React from 'react'

const Memory = ({image,content}) => {
  return (
    <div>
        <img src={image} alt="" />
        <p>{content}</p>
    </div>
  )
}

export default Memory