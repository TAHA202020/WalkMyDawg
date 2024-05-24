import React,{useState} from 'react'

function AddDawg() {
  const[imagesObject,setImagesObject]=useState([])
  const removebyIndex=(index)=>{
    URL.revokeObjectURL([imagesObject[index]])
    imagesObject.splice(index,1)
    setImagesObject([...imagesObject])
    
  }
  return (<div className='add-dawg'>
    <div className='flex'>

    
    <div className='add-dawg-images'>
      <label for="name">Name your Dawg :</label>
      <input  type='text'   placeholder='Name your Dawg'/>
    </div>
    <div className='add-dawg-images'>
    <p className='small-images-label'>Add Dawg Images :</p>
    <div className='small-images'>
      {imagesObject.map((image,index)=>{return <div className='small-image-container'> <img src={image} alt='dawg' key={index} className='small-image'/> <button className='remove-image-btn' onClick={()=>{removebyIndex(index)}}>x</button></div>})}
    </div>
    <div className='flex-images'>
    <label for="images">
      <span>Choisir une image</span>
      <input type='file' id='images' accept='image/*' onChange={(e)=>{setImagesObject([...imagesObject,URL.createObjectURL(e.target.files[0])])}} />
    </label>
    </div>
  </div>
  </div>
  </div>
  )
}

export default AddDawg