class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    const options = ["Item 1", "item 2", "Item 3"]
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick () {
    alert("Handle Pick")
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll () {

  }
  render() {
    const options = this.props.options;
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        { options.map((option) => <Option key={option} optionText={option} />) }

      </div>
    );
  }
}


class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}

      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if(option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// React components should have upper case first letter
// const jsx = (
//     <div>
//         <h1>Title</h1>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// )

//ReactDOM.render(jsx, document.getElementById('app'))

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));