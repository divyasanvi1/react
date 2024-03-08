import React,{useEffect ,useState} from 'react'

function GitHub() {
    const [data,setData]=useState([])
   useEffect(()=>{
     fetch('https://api.github.com/users/divyasanvi1')
     .then((res)=>res.json())
     .then(data=>{
        setData(data)
     })
   },[])
  return (
    <div className='bg-gray-600 '>
    <div className=' text-white text-center flex  items-center justify-center text-3xl'>
    <img src={data.avatar_url} alt="gitpicture" width={300}/>
    <h1 className=' m-2 text-center'>GitHub Followers :{data.followers}</h1>
    </div>
    </div>
  )
}

export default GitHub