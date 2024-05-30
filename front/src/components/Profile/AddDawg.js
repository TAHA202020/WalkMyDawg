import React,{useState ,useRef , useContext} from 'react'
import { UserInfoContext } from './Profile';
function AddDawg() {


  const {userInfo,setUserInfo} =useContext(UserInfoContext);
  const dawgName=useRef()
  const[imagesObject,setImagesObject]=useState([])
  const removebyIndex=(index)=>{
    URL.revokeObjectURL([imagesObject[index]])
    imagesObject.splice(index,1)
    setImagesObject([...imagesObject])
    
  }
  const addDawg=()=>
    {
      let dawg={dawgName:dawgName.current.value,images:imagesObject}
      //add to form data
      let formData=new FormData()
      formData.append("name",dawgName.current.value)
      imagesObject.map(image=>{
        formData.append("images",image.file)
      })
      
      fetch("http://localhost:4000/api/add-dawg", {method:"POST",body:formData ,credentials: "include"}).then(res=>res.json()).then(data=>{
        dawgName.current.value=""
        imagesObject.map((image,index)=>{URL.revokeObjectURL([image])})
        setImagesObject([])
        //setContext
        let copyUserInfo={...userInfo}
        copyUserInfo.dawgs=[...copyUserInfo.dawgs,data.dawg]
        setUserInfo(copyUserInfo)

      })
    }
  return (<div className='add-dawg'>
    <div className='flex'>

    
    <div className='add-dawg-images'>
      <label for="name">Name your Dawg :</label>
      <input  type='text'   placeholder='Name your Dawg' ref={dawgName}/>
    </div>
    <div className='add-dawg-images'>
    <p className='small-images-label'>Add Dawg Images :</p>
    <div className='small-images'>
      {imagesObject.map((image,index)=>{return <div className='small-image-container'> <img src={image.src} alt='dawg' key={index} className='small-image'/> <button className='remove-image-btn' onClick={()=>{removebyIndex(index)}}>x</button></div>})}
    </div>
    <div className='flex-images'>
    <label for="images">
      <span>Choisir une image</span>
      <input type='file' id='images' accept='image/*' onChange={(e)=>{setImagesObject([...imagesObject,{src:URL.createObjectURL(e.target.files[0]),file:e.target.files[0]}]);e.target.value=null}} />
    </label>
    </div>
  </div>
  <button className='link' onClick={addDawg}>Add Dawg</button>
  </div>
  </div>
  )
}

export default AddDawg