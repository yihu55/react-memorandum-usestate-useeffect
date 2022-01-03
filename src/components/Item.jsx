import React from "react";
import { ButtonStyled } from "../styles/ButtonStyled";
import { ItemStyled } from "../styles/ItemStyled";

export default function Item({ id, date, time, text, deleteData,submittingStatus }) {
  function deleteItem() {
    submittingStatus=true
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <ItemStyled>
      <div>
        <p>{text}</p>
        <p>
          {date}--{time}
        </p>
      </div>
      <div>
        <ButtonStyled bg="red" onClick={deleteItem}>
          remove
        </ButtonStyled>
      </div>
    </ItemStyled>
  );
}
