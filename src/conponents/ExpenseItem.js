import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2022, 1, 28)
    const expenseTitle = 'Car Insuarance';
    const expenseAmount = 20000

    return (<div className='expense-item'>
        <div>{expenseDate}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>{expenseAmount}</div>
        </div>
    </div>);
}

export default ExpenseItem;