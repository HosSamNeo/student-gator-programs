import React from 'react';
import { ThreeDots } from  'react-loader-spinner';


const Loading = () => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <ThreeDots
        height = "80"
        width = "80"
        radius = "9"
        color = 'blue'
        ariaLabel = 'three-dots-loading'     
        visible='true'
    />
    </div>
  )
}

export default Loading;