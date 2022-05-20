import "./ExpenseForm.css";

function ExpenseForm(){

    return <form >
<div className="new-expense__controls">
<div className="new-expense__control">
<labe>Title</labe>
<input type="text"/>


</div>


<div className="new-expense__control">
<labe>Amount</labe>
<input type="number"/>


</div>
<div className="new-expense__control">
<labe>Date</labe>
<input type="date"/>


</div>
</div>
<div className="new-expense__actions">
    <button></button>
</div>



    </form>

    

}
export default ExpenseForm