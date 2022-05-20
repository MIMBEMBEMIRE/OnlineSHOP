import ExpenseItem from "./Components/ExpenseItem";
import Card from "./Components/Card";
import NewExpense from "./NewEXPENSE/NewExpense";

function App (){

    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];



    return <Card>
    <NewExpense />

   
return <ExpenseItem title={expenses[0].title} 
 amount={expenses[0].amount}  
 id={expenses[0].id} date={expenses[0].date} />

<ExpenseItem title={expenses[1].title} 
 amount={expenses[1].amount}  
 id={expenses[1].id} date={expenses[1].date} />

 <ExpenseItem title={expenses[3].title} 
 amount={expenses[3].amount}  
 id={expenses[3].id} date={expenses[3].date} />



        
    </Card>

}
export default App;