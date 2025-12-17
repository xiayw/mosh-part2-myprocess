import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import UserList from './UserList';

const UsesPage = () => {
  const params =  useParams();
  return (
   <div className="row">
    <div className="col"><UserList/></div>
    <div className="col"><Outlet/></div>
   </div>
  )
}

export default UsesPage