import Charts from "./Components/Charts";
import PredictChart from "./Components/PredictChart";

function App() {
  return (
    <>
      <Charts location={"./72_machine_wise.csv"} title={"Plant 72 - Machine wise for each year"}></Charts>
      <Charts location={"./72_year_wise.csv"} title={"Plant 72 - Yearly for each machine"}></Charts>
      <PredictChart location={"./72_predicted.csv"} title={"Plant 72 - Predicted OEE values for next 12 months"}></PredictChart>
      <Charts location={"./76_machine_wise.csv"} title={"Plant 76 - Machine Wise for each year"}></Charts>
      <Charts location={"./76_year_wise.csv"} title={"Plant 76 - Yearly for each machine"}></Charts>
      <PredictChart location={"./76_predicted.csv"} title={"Plant 76 - Predicted OEE values for next 12 months"}></PredictChart>
      <Charts location={"./95_machine_wise.csv"} title={"Plant 95 - Machine Wise for each year"}></Charts>
      <Charts location={"./95_year_wise.csv"} title={"Plant 95 - Yearly for each machine"}></Charts>
      <PredictChart location={"./95_predicted.csv"} title={"Plant 95 - Predicted OEE values for next 12 months"}></PredictChart>
    </>
  );
}

export default App;

