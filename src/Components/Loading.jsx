import React from 'react';
import { Audio } from  'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Loading = () => {
  return (
    <Audio
        height = "80"
        width = "80"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        visible='true'
    />
  )
}

export default Loading;