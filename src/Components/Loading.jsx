import React from 'react';
import { ThreeDots } from  'react-loader-spinner';


const Loading = () => {
  return (
    <ThreeDots
        height = "80"
        width = "80"
        radius = "9"
        color = 'blue'
        ariaLabel = 'three-dots-loading'     
        visible='true'
    />
  )
}

export default Loading;