import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
 
  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });

    return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSettingTheDate={addFilterByYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    );
  };
   
  export default Expenses;