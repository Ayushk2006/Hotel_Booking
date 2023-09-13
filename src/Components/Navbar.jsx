import React, { useEffect } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/react";
import { useState, useContext } from "react";

const Navbar = () => {
  const nagivate = useNavigate();
  const handleLogout = ()=>{
    
     localStorage.clear();
     nagivate('/');
     
  }
  return (
    <div>
      <Flex
        marginLeft="10%"
        margin={"auto"}
        align="center"
        justify="space-between"
        color={"gray"}
        padding="1rem"
        bg=""
        width={"90%"}
      >
        

        <Flex>
          <Box margin={"auto"}>  
            <Button
              as={Link}
              to="/services"
              colorScheme="teal"
              variant="ghost"
              mx="0.5rem"
              textDecoration={"none"}
            >
              Hotel
            </Button>

          </Box>
        </Flex>
        <Flex>
          <Box margin={"auto"}>  
            <Button
               onClick={handleLogout}
            >
               Logout
            </Button>

          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
