import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

function GitHub() {
    const [data , setData] = useSearchParams([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    } , [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers: { data.followers}</div>
  )
}

export default GitHub
  
