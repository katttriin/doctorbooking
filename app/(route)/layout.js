import React from 'react'
import CategoryList from './search/[cname]/_components/CategoryList'

function layout({children}) {
  return (
    <div className='grid grid-cols-5 '>
      <div className='hidden md:block'>
        {/* Category */}
        <CategoryList/>
      </div>
      <div className='col-span-4 md:col-span-3'>
      {children}
      </div>
      
      </div>
  )
}

export default layout