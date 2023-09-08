import React from "react";

const List = ({ listItem = [] }) => {
  let AllListItem = [];
  listItem.forEach((item) => {
    AllListItem = item.split(",");
  });
  return (
    <>
      <ul>
        {AllListItem &&
          AllListItem.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
      </ul>
    </>
  );
};

export default List;
