import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setFeed } from '../store/reducers/feedReducer'
import Card from '../Components/Card'

const Feed = () => {

  const dispatch = useDispatch();

  const {data}  = useSelector((state) => state.feed);
  console.log(data);

  const getFeed = async () => {
    const res = await axios.get(BASE_URL + '/user/feed',{withCredentials:true});
    dispatch(setFeed(res.data));
  }


  useEffect(()=>{
    getFeed();
  },[])

  return (
    (data && <Card currUser={data[0]} />)
  )
}

export default Feed