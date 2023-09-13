import React, { useEffect, useState } from 'react'
import { auth, provider } from './config'
import Services from './service';
import { signInWithPopup } from 'firebase/auth'
import { Button, Box } from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      navigate('/services')
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })
  const myButtonStyle = {
    width:200,
    marginTop:300,
    marginLeft:400,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    flex:1
  }
   
  return (
    <div>
      <h1 style={{width:200,alignItems:'center', justifyContent:'center',color:'green'}}>Hotel Booking App</h1>
      <Box>
          <Button onClick={handleClick}
          bg="#fb6435" 
          color="white"
          style={myButtonStyle}
          >SignIn With Google</Button>
        
      </Box>

    </div>
  )
}
