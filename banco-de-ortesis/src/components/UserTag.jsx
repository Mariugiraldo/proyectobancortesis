import React, {useEffect, useState } from 'react'

export default function UserTag({userName, userLastName}) {
    const [tag, setTag] = useState('');
    if(!userName && !userLastName) return null;
    useEffect(()=>{
        const user = (userName[0]+userLastName[0]);
        setTag(user);
    },[])
  return (
    <div className='h-10 w-10 bg-greenAccent text-whiteBg rounded-full text-lg p-2'>{tag}</div>
  )
}
