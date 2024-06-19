import { useState } from "react";
import "./App.css";
import useOurOwnCustom from "./useOurOwnCustom";

function App() {
  const { isError, isLoading, totalData } = useOurOwnCustom(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Internal Server Error</>;
  }
  return (
    <>
      <h1 className="text-3xl">App</h1>
      <h1 className="text-3xl">Data got Fetched Succesfully</h1>
      <p>{JSON.stringify(totalData)}</p>
    </>
  );
}

export default App;
