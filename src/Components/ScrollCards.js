import React from 'react'
import { CDN_URL } from "../utils/constant"

const ScrollCards = (props) => {
    const { scrollData } = props
  return (
    <div>
        <img src={CDN_URL + scrollData.info.cloudinaryImageId} alt='scrollImage'/>
    </div>
  )
}

export default ScrollCards