
import "./ExpenseDate.css";
function ExpenseDate(props){


    const month =props.date.toLocaleString("en-US",{month: "long"});
    const days =props.date.toLocaleString("en-US",{day: "2-digit"});
    const years =props.dat.geFullYear();
    return<div className="expense-date">
<div className="expense-date__month" >
{month}</div>
<div className="expense-date__year">
{years}

</div>
<div className="expense-date__day">
{days}

</div>


</div>


}

export default ExpenseDate;