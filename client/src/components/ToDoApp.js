import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./ToDoApp.css";
import ListItem from "./ListItem";

library.add(faTrash);

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  updateCurrentItemText = (value) => {
    this.setState({
      currentItem: { ...this.state.currentItem, text: value, key: Date.now() },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const temp = this.state.currentItem;
    if (temp.text === "") {
      return;
    }
    await this.setState({
      items: [...this.state.items, temp],
      currentItem: { text: "", key: "" },
    });
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filteredItems });
  };

  updateItem = (key, value) => {
    const tempList = this.state.items;
    tempList.map((item) => {
      if (item.key === key) {
        item.text = value;
      }
      return item;
    });
    this.setState({ items: tempList });
  };

  render = () => {
    return (
      <React.Fragment>
        <header>
          <form id="to-do-form" onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="Enter task"
              value={this.state.currentItem.text}
              onChange={(e) => {
                this.updateCurrentItemText(e.target.value);
              }}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <div className="items-list">
          <ListItem
            items={this.state.items}
            deleteItem={this.deleteItem}
            updateItem={this.updateItem}
          />
        </div>
      </React.Fragment>
    );
  };
}

export default ToDoApp;
