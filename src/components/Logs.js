import React from "react";
import Scrollbars from "react-custom-scrollbars";
import Button from "react-bootstrap/Button";

export const Logs = ({ stockPricing, setPause, pause }) => {
  return (
    <div style={{ flexGrow: 1, margin: 15 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Logs</h1>
        <Button
          style={{ width: 150, height: 50 }}
          onClick={() => setPause(!pause)}
        >
          {pause ? "Unpause Log" : "Pause Log"}
        </Button>
      </div>

      <div
        style={{
          border: "3px solid black",
          flexGrow: 1,
          height: "85%",
          minHeight: "85vh",
        }}
      >
        <Scrollbars>
          {stockPricing?.slice(0).reverse().map(({ data, date }) => (
            <div style={{ margin: 20 }}>
              <span>
                Updates for {date} <br />
              </span>
              {data?.map(({ code, price }) => (
                <span>
                  {code}: ${price}
                  <br />
                </span>
              ))}
            </div>
          ))}
        </Scrollbars>
      </div>
    </div>
  );
};
