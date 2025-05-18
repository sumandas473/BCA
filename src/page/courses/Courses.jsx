import React from 'react'
import Search from '../../components/Search/Search'
import AllCourses from '../../components/courses/AllCourses'

function Courses() {
  return (
    <div className='pt-16 text-white'>
      <Search />
      <AllCourses />
    </div>
  )
}

export default Courses