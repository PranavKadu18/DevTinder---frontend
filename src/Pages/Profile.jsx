import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import EditProfile from './EditProfile';

const Profile = () => {
    useEffect(()=>{console.log("Profile rendered");
    })
    const user = useSelector(state => state.user.data);
  return (
    (user && <EditProfile currData={user} />)
  )
}

export default Profile