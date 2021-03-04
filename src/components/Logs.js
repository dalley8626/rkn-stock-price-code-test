import React from "react";
import Scrollbars from "react-custom-scrollbars";

export const Logs = ({ stockPricing, setPause, pause }) => {
  return (
    <div style={{ flexGrow: 1, marginRight: 40 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <p>Logs</p>
        <button
          style={{ width: 150 }}
          onClick={() => setPause(!pause)}
          className="btn btn-primary"
        >
          {pause ? "Unpause Log" : "Pause Log"}
        </button>
      </div>

      <div
        style={{
          border: "3px solid black",
          flexGrow: 1,
          height: "80%",
          minHeight: "80vh",
        }}
      >
        <Scrollbars>
          {stockPricing?.map(({ data, date }) => (
            <div style={{ margin: 20 }}>
              <p>{date}</p>
              {data?.map(({ code, price }) => (
                <p>
                  {code}: ${price}
                </p>
              ))}
            </div>
          ))}
        </Scrollbars>
      </div>
    </div>
  );
};
