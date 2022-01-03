import React from "react";
import Item from "./Item";

export default function List({ listData, deleteData, submittingStatus }) {
  console.log(listData);
 

  return (
    <div>
      {listData.map((item) => {
        const { text, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            text={text}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
}
