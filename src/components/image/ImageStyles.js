import styled from 'styled-components'
import { motion } from "framer-motion";



export const Navbar = styled(motion.nav)` 
    width: 100%;
    height: 4rem;
    background: purple;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    overflow: hidden;
`

export const Searchbar = styled(motion.input)` 
    width: 35%;
    padding: 1rem;
    transition: width 0.5s;

    &:focus {
        width: 40%;
        background-color: black;
        color: white;
        font-size: 1rem;
    }

    @media screen and (max-width: 451px){   
    width: 80vw;
    
    &:focus {
        width:90vw;
    }
}

   

    

`

export const ImageContainer = styled(motion.div)` 
    
    display: grid;
    grid-template-columns: repeat(auto-fit, 450px);
    grid-gap: 20px;
    justify-content: center;
    padding: 10px;

@media screen and (max-width: 451px){   
    grid-template-columns: repeat(auto-fit, 90vw); 
    grid-gap: 5px;    
}
    
`

export const ImageCard = styled(motion.div)` 
    display: flex;
    padding: 1rem;
    margin: 1rem;
    //height: 100px;
    align-items: center;
    background-color: pink;
    border-radius: 1.5rem;
    transition: background-color 0.5s;

    &:hover {
    background-color: #FF3E4D;
    }
`

export const Thumbnail = styled(motion.img)` 
    height: 80px; 
    width: 80px; 
    border-radius: 1rem; 
`

export const Title = styled(motion.div)` 
    word-wrap: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 80px;
    padding: 1rem;
    margin-left: 1rem;
    align-self: flex-start;
    padding-top: 0px;
    padding-left: 0px;
    font-size: 1.1rem;
    //font-weight: 500;

    @media screen and (max-width: 451px){   
    font-size: 0.9rem;  
}    
`

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`

export const Modal = styled(motion.div)` 
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 600px;
    background-color: black;
    justify-content: space-between;
    color: #fff;
    opacity: 1;
    position: fixed;
    left: 35%;
    top: 10%;
    z-index: 1000;
    padding: 1rem;
    //transform: translate(-50%, -50%);
 /* @media screen and (max-width: 770px){   
    position: fixed;
    top: 50%;
    left:50%;
}     */

@media screen and (max-width: 1100px){   
    position: fixed;
    top: 20%;
    left:30%;
} 

@media screen and (min-width: 760px) and (max-width: 768px){   
    width: 70vw;
    height: 85vh;
    position: fixed;
    top: 10%;
    left:15%;
} 

@media screen and (min-width: 279px) and (max-width: 540px){   
    width:100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left:0;
    right:0;
    bottom:0;
} 

 
`

export const Button = styled(motion.button)` 
    background-color: #4CAF50; /* Green */
    border: none;
    color: black;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
  background-color: #f44336;
  color: white;
}
`