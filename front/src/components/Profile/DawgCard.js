import React from 'react'
import {Carousel} from "antd"
function DawgCard({name,image}) {
  return (
    <div>
      <strong>{name}</strong>
      <Carousel style={{width:"340px",height:"350px",overflow:"hidden"}} autoplay={false} arrows={image.length>1}>
        {image.map((image)=>{
          image="http://localhost:4000/images/"+image
          return<div><img className='image-carousel' src={image} /></div>
        })}
      </Carousel>
    </div>
  )
}

export default DawgCard

/* {image.map((image)=>{
          image="http://localhost:4000/images/"+image
          return <img src={image} />
        })} */