import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

import React, { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
 
  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });

    return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSettingTheDate={addFilterByYear} />
        {filteredExpenses.map((expense) => 
          (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
        )}
      </Card>
    );
  };
   
  export default Expenses;