import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Colombo", "London", "Paris", "Tokyo"];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
  const getMessage = () => {
    return items.length == 0 && <p>No Item Found</p>;
  };



  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;