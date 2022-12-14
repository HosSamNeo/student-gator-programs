import React from 'react';
import ProgramCard from './ProgramCard/ProgramCard';

const DisplayPrograms = ({currentPosts}) => {
  return (
    <>
        {currentPosts.map((prog) => {
            <ProgramCard prog={prog} />
        })}
    </>
  )
}

export default DisplayPrograms;