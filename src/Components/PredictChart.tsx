import React from "react";
import Papa, { ParseResult } from "papaparse";
import PredictLinechart from "./PredictLinechart";

interface PredictChartProps {
  readonly location: string;
  readonly title: string;
}
type Data = {
  [key: string]: string | number;
};
type Values = {
  data: Data[];
};

function PredictChart({ location, title }: PredictChartProps) {
  const [values, setValues] = React.useState<Values | undefined>();
  const getCSV = () => {
    Papa.parse(location, {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        setValues(results);
      },
    });
  };
  React.useEffect(() => {
    getCSV();
  }, []);

  return (
    <>
      {values ? (
        <PredictLinechart values={values} title={title}></PredictLinechart>
      ) : null}
    </>
  );
}

export default PredictChart;