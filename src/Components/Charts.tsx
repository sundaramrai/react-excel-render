import React from "react";
import * as Papa from "papaparse";
import type { ParseResult } from "papaparse";
import Linechart from "./Linechart";

interface Props {
  readonly location: string;
  readonly title: string;
}
type Data = {
  [key: string]: string | number;
};
type Values = {
  data: Data[];
};

function Charts({ location, title }: Props) {
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
