import React from "react";
import "./App.css";
import List from "./list";
function App() {
  const header = [
    { label: "Things to do", key: "title" },
    { label: "Owner", key: "owner" },
    { label: "Status", key: "status" },
    { label: "Due Date", key: "dueDate" },
    { label: "Priority", key: "priority" }
  ];
  const listData = [
    {
      id: 1,
      title: "assignment task",
      owner: "Ashwini",
      status: "Working on it",
      dueDate: "25/05/2020",
      priority: "Urgent"
    },
    {
      id: 2,
      title: "cook food",
      owner: "Test",
      status: "Stuck",
      dueDate: "25/05/2020",
      priority: "High"
    },
    {
      id: 3,
      title: "Break fast today",
      owner: "Test",
      status: "Done",
      dueDate: "25/05/2020",
      priority: "Medium"
    },
    {
      id: 4,
      title: "previous assignment",
      owner: "Test",
      status: "Waiting for review",
      dueDate: "25/05/2020",
      priority: ""
    }
  ];
  return <List Allheader={header} list={listData} addItems={true} />;
}
export default App;
