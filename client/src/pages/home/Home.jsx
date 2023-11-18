import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './home.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';


export default function Home({type}) {
  const [lists,setLists]=useState([])
  const [genre,setGenre]=useState(null)

  useEffect(()=>{
    const getRandomLists=async ()=>{
      try {
        const res = await axios.get(`lists/${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmFjMTE5MGExMzQ3YTQwOWFhY2Y1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc2ODM4Nn0.FeFq2qUtOY69zcX7jsx69G4anCvInDPAdKUiGVenv3o"
          }
        });
        // console.log(res);
        setLists(res.data)//res.data mei saari lists hain
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  },[type,genre])
  
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type} setGenre={setGenre}/>
        {lists.map((list)=>(
          <List list={list}/>
        ))}
    </div>
  )
}

