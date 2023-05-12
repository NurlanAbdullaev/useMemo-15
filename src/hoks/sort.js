import { useState } from "react";

export const useSortData = (data) => {
  console.log(data, "data");
  const [sortData, setsortData] = useState([]);

  function sort(option) {
    if (option === "ASC") {
      data.sort((a, b) => {
        return a.price - b.price;
      });
      setsortData([...data]);
    } else if (option === "DESC") {
      data.sort((a, b) => {
        return b.price - a.price;
      });
      setsortData([...data]);
    } else {
      return 0;
    }
  }
  return {
    sortData,
    sort,
  };
};
