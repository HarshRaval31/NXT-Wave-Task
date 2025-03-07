import React, { useEffect, useState } from 'react'
import ProductForm from '../Component/ProductForm';
import { deleteData, getData, updateData } from '../Redux/Reducers/ProductReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '../Component/Skeleton';

function Products() {
 var dispatch =useDispatch()

 var dataa = useSelector(st => st.productReducer)
  console.log(dataa.isLoding);

  useEffect(() => {
      dispatch(getData)
  }, [])

  function handelDelet(delId){
    dispatch(deleteData(delId))
  }


  return (
    <div className='w-[100%] h-[100vh]'>
      <div className='w-[100%] h-[auto] flex justify-center mb-[50px] mt-[50px]'>
        <ProductForm/>
      </div>
    <div className='rounded-[10px] w-[100%] border '>
        <div className='w-[1300px] 2xl:w-[100%] h-[75px] flex items-center p-[20px] border-b'>
            <h1 className='text-[25px] font-bold '>Product Page</h1>
        </div>
        <div className='overflow-y-auto p-[20px] h-[500px] w-[1300px] 2xl:w-[100%] flex justify-between flex-wrap'>

            {dataa.isLoding?<><Skeleton/><Skeleton/><Skeleton/></>:
              dataa.arr.map((el)=>{
                return<> 
                <div key={el.id} className='w-[17%] h-[250px] border-1 rounded-[10px] justify-evenly p-[10px] flex flex-wrap mb-[25px]'>
                <div className=' w-[100%] h-[50%] flex justify-center'>
                  <img className=' h-[100%]' src={el.URL} alt="" />
                </div>
                <div className='flex justify-center  w-[100%]'>
                  <h1 className='text-[16px]'>{el.Title}</h1>
                </div>
                <div className='flex justify-center  w-[100%]'>
                  <h1 className='text-[16px]'>{el.price}</h1>
                </div>
                <div className='flex justify-center  w-[100%]'>
                  <button id='btn22' onClick={()=>handelDelet(el.id)}>Delete</button>
                </div>
                </div>
                </>
              })
            }
        </div>
    </div>
</div>
  )
}

export default Products