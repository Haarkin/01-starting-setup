import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = props => {
    return (
      <Card className="expenses">
        {props.expenses.map(({ id, title, amount, date }) => (
          <ExpenseItem title={title} amount={amount} date={date} />
        ))}
      </Card>
    );
  };
   
  export default Expenses;