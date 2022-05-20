import "./ExpenseItem.css";
import Card from "./Card";
import {useState} from "react";

function ExpenseItem(props)
    {
        const [title,setTitle]=useState(props.title);
        function titleHander(){
            setTitle("MIREILLE");

        }
        
        
        
        return <Card className="expense-item">


    <div className="expense-item__description">
    <h2>{title}</h2>
    <div className="expense-item__price">{props.amount}</div>
    <button onClick={titleHander}>Change Title</button>



</div>

    </Card>

}
export default ExpenseItem;