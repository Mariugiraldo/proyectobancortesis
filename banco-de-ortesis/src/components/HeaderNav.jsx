import React from 'react'
import SearchBar from './SearchBar'
import Notification from './Notification'

export default function HeaderNav() {
  return (
    <div className='flex w-full items-center justify-evenly p-3'>
        <SearchBar />
        <Notification />
    </div>
  )
}
