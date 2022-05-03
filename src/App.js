import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 294, date: new Date(2021, 6, 14) },
    { id: "e2", title: "Bike Insurance", amount: 274, date: new Date(2021, 6, 18) },
    { id: "e3", title: "Shoes", amount: 277, date: new Date(2021, 6, 24) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
