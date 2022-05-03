import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 294, date: new Date(2021, 6, 14) },
    { id: "e2", title: "Bike Insurance", amount: 274, date: new Date(2021, 6, 18) },
    { id: "e3", title: "Shoes", amount: 277, date: new Date(2021, 6, 24) },
  ];
  return (
    <div>
      <Expenses items={expenses} />
      <h1>Staring the project</h1>
    </div>
  );
}

export default App;
