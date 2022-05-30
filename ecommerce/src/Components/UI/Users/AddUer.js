import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import {useState} from  "react";
import EnrrModel from "./EnrrModel";



const AddUser =(props)=>{
const [enterUsername,setenterUsername] =useState('');
const [enterAgename,setenterAgename] =useState('');
const [error,setError] = useState()




    function adduserHander(event){
        event.preventDefault()

    if(enterUsername.trim().length ===0 || enterAgename.trim().length === 0){
        setError({
            title:"invalid input",
            message:"please enter a valid name and age (non empty value)"
            
        })
        return 

    }
    if(+enterAgename <1){


        setError({
            title:"invalid age",
            message:"please entr a valid age"
            
        })
        return
    }

    props.onAddUser(enterUsername,enterAgename)

        setenterUsername('')
        setenterAgename('')

    }

const usernameChangeHander =(event)=>{
    setenterUsername(event.target.value)

}
const agenameChangeHander =(event)=>{
    setenterAgename(event.target.value)

}
const errorHander =() =>{
    setError(null)
}


    return <div>
    { error && < EnrrModel  title={error.title} message={error.message} onConfirm={errorHander}/>}
    
    
    <Card className={classes.input}>
    <form onSubmit={adduserHander}>
        <label htmlfor="usernaame">
            UserName
        </label>
        <input type="text" name="usernaame"  id="usernaame"  value={enterUsername} onChange={usernameChangeHander}/>
        <label htmlfor="age">
            Age
        </label>
        <input type="numbeer" name="usernaame"  value={enterAgename} id="age" onChange={agenameChangeHander} />
        
        <Button type="submit">Add User</Button>

        </form>

        
        </Card>
        </div>

    
}
export default AddUser;
