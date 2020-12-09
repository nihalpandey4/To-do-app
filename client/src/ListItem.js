import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flipmove from "react-flip-move";

const ListItem = ({ items, deleteItem, updateItem }) => {
  const renderedList = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            value={item.text}
            id={item.key}
            onChange={(e) => updateItem(item.key, e.target.value)}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <Flipmove>{renderedList}</Flipmove>
    </React.Fragment>
  );
};

export default ListItem;
