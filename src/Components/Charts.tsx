import React from "react";
import Papa, { ParseResult } from "papaparse";
import Linechart from "./Linechart";

interface props {
  location: string;
  title: string;
}
type Data = {
  [key: string]: string | number;
};
type Values = {
  data: Data[];
};

function Charts({ location, title }: props) {
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
        <Linechart
          values={values}
          title={title}
        ></Linechart>
      ) : null}
    </>
  );
}

export default Charts;
