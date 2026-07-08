import React from 'react'
import ViewUser from '../components/ViewUser'
import RegisterUser from '../components/RegisterUser'
import Login from '../components/Login'

const AdminDashboard = () => {
  return (
    <div>
        <ViewUser/>
        <RegisterUser/>
        <Login/>
    </div>
  )
}

export default AdminDashboard