import './list.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';

export default function List({list}) {
    const [isMoved,setIsMoved]=useState(false);
    const [slideNumber,setSlideNumber]=useState(0);
    const [clickLimit,setClickLimit]=useState(window.innerWidth/230)

    const listRef=useRef();

    const handleClick=(direction)=>{
        setIsMoved(true);
        let distance=listRef.current.getBoundingClientRect().x-50;
        if(direction==='left' && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform=`translateX(${230+distance}px)`
        }
        if(direction==='right' && slideNumber < 10-clickLimit){// because aggr 5 bar click kr diya(initial state(0)) se toh last item pr pahuch jayenge( assuming ki 10 item hain total)
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform=`translateX(${-230+distance}px)`
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlinedIcon className='sliderArrow left' onClick={()=>handleClick("left")} style={{display:!isMoved && 'none'}}/>
            <div className="container" ref={listRef}>
                {list.content.map((item,i)=>(
                    <ListItem index={i} item={item}/>
                ))}
            </div>
            <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}
