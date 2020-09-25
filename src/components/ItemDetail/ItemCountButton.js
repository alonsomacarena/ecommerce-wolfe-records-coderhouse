import React, {useEffect, useState } from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount.js';
import {Link} from 'react-router-dom';

export default function ItemCountButton({initial,count}){
    const [value, setValue] = useState(initial);
    useEffect(() => {
      ItemCount(count).then(res =>{
        console.log("retrieved value counter:", res);
        setValue(res)
      })
      return () => {
        console.log('dismounted ItemDetail')
      }
    },[]);
  
   return(
    {value}
   )
}