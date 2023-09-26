import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

import { useState } from 'react';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');
 
  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
  };

    return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSettingTheDate={addFilterByYear} />
        {props.expenses.map(({ id, title, amount, date }) => (
          <ExpenseItem title={title} amount={amount} date={date} />
        ))}
      </Card>
    );
  };
   
  export default Expenses;