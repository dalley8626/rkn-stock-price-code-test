export const Summary = ({ headers, listStocks }) => {
  return (
    <div style={{ flexGrow: 2 }}>
      <p style={{ marginBottom: 25 }}>Summary</p>
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
                  <th>{code}</th>
                  <th>{price}</th>
                  <th>{lowestPrice}</th>
                  <th>{highestPrice}</th>
                  <th>{currentPrice}</th>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
