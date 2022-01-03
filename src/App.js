import React, { useState, useEffect, useRef } from "react";
import Edit from "./components/Edit";
import Heading from "./components/Heading";
import List from "./components/List";
import { API_GET_DATA } from "./global/constants";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  console.log(data);
  setData(data);
}
async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}
function App() {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    fetchData(setData);
  }, []);

  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(data).then((data) => (submittingStatus.current = false));
  }, [data]);

  return (
    <div>
      <Heading heading="MEMORANDUM" />
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
}

export default App;
