import React,{useState} from 'react'

function AddDawg() {
  const[imagesObject,setImagesObject]=useState([])
  return (<div>
    Add Dawg
    <div className='small-images'>
      {imagesObject.map((image,index)=>{return <img src={image} alt='dawg' key={index}/>})}
    </div>
    <label for="images">
      <span>Choisir une image</span>
      <input type='file' id='images' accept='image/*' onChange={(e)=>{setImagesObject([...imagesObject,URL.createObjectURL(e.target.files[0])])}} multiple />
    </label>
  </div>
  )
}

export default AddDawg