import './App.css';

class App extends React.Component {
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

  render = () => {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={(e)=>this.handleSubmit(e)}>
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
        <ListItem items={this.state.items} deleteItem = {this.deleteItem} updateItem={this.updateItem} />
      </div>
    );
  };
}

export default App;
