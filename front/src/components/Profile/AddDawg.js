import React,{useState} from 'react'

function AddDawg() {
  const[imagesObject,setImagesObject]=useState([])
  const removebyIndex=(index)=>{
    URL.revokeObjectURL([imagesObject[index]])
    imagesObject.splice(index,1)
    setImagesObject([...imagesObject])
    
  }
  return (<div className='add-dawg'>
    <div className='small-images'>
      {imagesObject.map((image,index)=>{return <div className='small-image-container'> <img src={image} alt='dawg' key={index} className='small-image'/> <button className='remove-image-btn' onClick={()=>{removebyIndex(index)}}>x</button></div>})}
    </div>
    <label for="images">
      <span>Choisir une image</span>
      <input type='file' id='images' accept='image/*' onChange={(e)=>{setImagesObject([...imagesObject,URL.createObjectURL(e.target.files[0])])}} />
    </label>
  </div>
  )
}

export default AddDawg