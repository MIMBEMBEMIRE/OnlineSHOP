import Card from "./Card";
import classes  from"./UseList.module.css"
function UseList(props){

    return <Card className={classes.users}>
    
<ul>

    {props.users.map((user)=>(
        <li key={user.id}> 
           {user.name} ({user.age} yesrs ald)
        </li>

    ))}
</ul>

        
   </Card> 

}
export default UseList;