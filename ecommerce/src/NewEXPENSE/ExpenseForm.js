import "./ExpenseForm.css";
import {useState} from "react";

function ExpenseForm(){
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState("")


    function titleChangeHender(event){
        setTitle(event.target.value);

    }

    function amoutChangeHender(event){
        setAmount(event.target.value);

    }
function formSubmit(event){
    event.prevenDefault();
    const expenseDate= {title:title,
        amount:amount
    
    }


}




    return <form onSubmit={formSubmit} >
<div className="new-expense__controls">
<div className="new-expense__control">
<labe>Title</labe>
<input type="text"  value={title} onChange={titleChangeHender}/>


</div>


<div className="new-expense__control">
<labe>Amount</labe>
<input type="number" value={amount} onChange={amoutChangeHender}></input>
    


</div>
<div className="new-expense__control">
<labe>Date</labe>
<input type="date"/>


</div>
</div>
<div className="new-expense__actions">
    <button type="submit">Add Expense</button>
</div>



    </form>

    

}
export default ExpenseForm