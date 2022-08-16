import React from 'react';
import { useParams } from 'react-router-dom';

const Verify = () => {

  const params = useParams();

  console.log(params);
    
  return (
    <div><h1>Verify your Account</h1></div>
  )
}

export default Verify;