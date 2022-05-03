import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 294, date: new Date(2021, 6, 14) },
    { id: "e2", title: "Bike Insurance", amount: 274, date: new Date(2021, 6, 18) },
    { id: "e3", title: "Shoes", amount: 277, date: new Date(2021, 6, 24) },
  ];
  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <h1>Staring the project</h1>
    </div>
  );
}

export default App;
