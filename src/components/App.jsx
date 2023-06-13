import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("");
  const [pageAply, setPageAply] = useState("");

  function HoldPage(event) {
    setPage(event.target.value);
  }
  function Calculate(event) {
    const Target = Math.round(page / 7);
    setPageAply(Target);
    event.preventDefault();
  }

  return (
    <div>
      <h1>One Book per Week</h1>
      <form>
        <input
          className="input"
          type="text"
          onChange={HoldPage}
          name="pageNumber"
          placeholder="Quantidade de Páginas"
        />
        <button onClick={Calculate} type="submit">
          Calcular
        </button>
      </form>
      <p>{pageAply} Páginas por dia</p>
    </div>
  );
}

export default App;
