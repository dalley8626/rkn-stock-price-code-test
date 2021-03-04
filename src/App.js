import "./App.css";
import { Logs } from "./components/Logs";
import { Summary } from "./components/Summary";

import React, { useEffect, useState } from "react";

function App() {
  const [stockPricing, setStockPricing] = useState();
  const [listStocks, setListStocks] = useState([]);
  const [pause, setPause] = useState(false);
  const [today, setDate] = useState(new Date());
  const headers = ["Stock", "Starting", "Lowest", "Highest", "Current"];

  useEffect(() => {
    const interval = setTimeout(() => {
      setDate(new Date());
      const currentTime = today.toUTCString();

      if (!pause) {
        const fetchData = async () => {
          const data = await fetch("https://join.reckon.com/stock-pricing")
            .then((res) => res.json())
            .then((data) => data);

          setStockPricing([
            ...(stockPricing || []),
            { data, date: currentTime },
          ]);

          listStocks?.length < 1 && setListStocks(data);
        };

        fetchData();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  // REFACTOR
  useEffect(() => {
    setListStocks((prev) =>
      prev.map((prevStock) => {
        let newStock;

        stockPricing?.map((val) =>
          val.data.map((current) => {
            if (current.code === prevStock.code) {
              const currentPrice = current?.price;
              const lowestPrice = prevStock?.lowestPrice;
              const highestPrice = prevStock?.highestPrice;

              newStock = {
                ...prevStock,
                currentPrice: currentPrice,
                lowestPrice: lowestPrice
                  ? lowestPrice > currentPrice
                    ? currentPrice
                    : lowestPrice
                  : currentPrice,
                highestPrice: highestPrice
                  ? highestPrice < currentPrice
                    ? currentPrice
                    : highestPrice
                  : currentPrice,
              };
            }
          })
        );

        return newStock;
      })
    );
  }, [stockPricing]);

  return (
    <div
      style={{
        display: "flex",
        textAlign: "left",
        margin: 30,
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Logs stockPricing={stockPricing} setPause={setPause} pause={pause} />
      <Summary headers={headers} listStocks={listStocks} />
    </div>
  );
}

export default App;
