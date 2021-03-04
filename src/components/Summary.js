export const Summary = ({ headers, listStocks }) => {
  return (
    <div style={{ flexGrow: 2, margin: 15 }}>
      <h1>Summary</h1>

      <div
        style={{
          border: "3px solid black",
          flexGrow: 1,
          height: "60%",
          minHeight: "50vh",
        }}
      >
        <table className="table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th scope="col">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {listStocks?.map(
              ({ price, code, currentPrice, lowestPrice, highestPrice }) => (
                <tr>
                  <td>{code}</td>
                  <td>{price}</td>
                  <td>{lowestPrice}</td>
                  <td>{highestPrice}</td>
                  <td>{currentPrice}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
