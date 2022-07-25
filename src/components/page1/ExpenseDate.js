import './ExpenseDate.css';

function ExpenseDate(){
    const date=new Date();
    const month=date.toLocaleString('en-US', {month: 'short'});
    const day=date.toLocaleString('en-US',{day: '2-digit'});
    const year=date.getFullYear();

    return(
    <div id="date1" className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>       
    </div>    
   );
}
export default ExpenseDate;