
import { Button, ButtonBase, Container, Typography, withStyles } from "@material-ui/core";
import { BusinessTwoTone } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Speech from 'react-speech';
import Ow1T from './Ow1T.gif';






const styles= {
    containRobot:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    robotBackground:{
        backgroundImage: "url('/Ow1T.gif')" ,
        height:300,
        width:300,
        
        
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain',
        backgroundPosition:'left center',
    },
    joke:{
        width:'80vw'
    },

    

}















function Contain(props){

    const [joke,setJoke] = useState('')
    const [ loading,setLoading] = useState(false)
    const {classes} = props





    async function getJoke(){
        setLoading(true)

        const res = await axios.get('https://icanhazdadjoke.com/',{headers:{Accept:'application/json'}})
        console.log(res)
        

        setJoke(res.data.joke)
        setLoading(false)

      

        
        
    }


        return <div className={classes.containRobot}> 
        <div className={classes.robotBackground}><Button  variant="outlined" size="large" onClick={getJoke}>{'New Joke'}</Button></div> 
        
        <div className={classes.joke}><Typography variant='h6'>{joke}</Typography></div>
       
        
        
        
        
        
        <Speech  textAsButton={true} displayText='Say it' text={joke}></Speech>
  

        
    </div>



    
}




export default withStyles(styles)(Contain)