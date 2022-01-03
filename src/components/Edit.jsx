import React, { useState } from "react";
import { ButtonStyled } from "../styles/ButtonStyled";
import { FormStyled } from "../styles/FormStyled";
import { v4 } from "uuid";

export default function Edit({ add,submittingStatus }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");

  function addItem(e) {
    e.preventDefault();
    submittingStatus.current=true

    add(function (prevData) {
      return [{ date, time, text, id: v4() },...prevData];
    });
  }
  
  return (
    <div>
      <FormStyled>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="text"
        />
        <ButtonStyled bg="black" color="white" onClick={addItem}>
          Add to memo
        </ButtonStyled>
      </FormStyled>
    </div>
  );
}
