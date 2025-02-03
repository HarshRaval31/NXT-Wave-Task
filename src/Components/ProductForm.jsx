import React from 'react'

function ProductForm() {
  return (
    
    <div id='Main'>
    <div id='main'>
    <div id='img'>
        <img src="https://images.pexels.com/photos/5951553/pexels-photo-5951553.jpeg" alt=""  id='Img'/>
    </div>
    <div id='form'>
    <form action=""  >
    <input type="text" id='input1'  className='  border   rounded-[10px]  ps-[10px] '  placeholder='Product Title'  name='Title'  />    <br /> <br />
    <input type="text" id='input1'  className='  border  rounded-[10px]  ps-[10px] '  placeholder='Product Price'   name='price'  />    <br /> <br />
    <input type="text" id='input1'  className='  border   rounded-[10px]  ps-[10px] '  placeholder='Product URL '   name='URL'    />    <br /> <br />
    <input type="submit" id='btn1'    className='  border p-[5px]   rounded-[10px] '   />
    </form>
    </div>
    </div>
    </div>




  )
}

export default ProductForm