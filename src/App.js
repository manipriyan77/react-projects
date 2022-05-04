import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Car Insurance", amount: 294, date: new Date(2021, 6, 14) },
  { id: "e2", title: "Bike Insurance", amount: 274, date: new Date(2021, 6, 18) },
  { id: "e3", title: "Shoes", amount: 277, date: new Date(2021, 6, 24) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
