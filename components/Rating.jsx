import React from 'react'
import { Star } from "@mui/icons-material";
import { StarBorder } from "@mui/icons-material";
import styles from '@styles/components/listing.module.css'

const Rating = ({rating}) => {
    const ratingList = []
    while(ratingList.length < 5){
        if(ratingList.length < rating){
            ratingList.push("star")
        } else {
            ratingList.push("starBorder")
        }
    }
  return (
    <div className={styles.star}>
        {ratingList.map((staritem, index) => {
           return (staritem == "star" ?  <Star key={index} /> : <StarBorder key={index}/>)
        })}
    </div>
  )
}

export default Rating