class Counter extends React.Component {
    constructor (props) {
        super (props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count = 0,
        };
    }
    handleAddOne() {
        //this.state.count = this.state.count + 1;
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        console.log(this.state);
    }
    handleMinusOne() {
        //this.state.count = this.state.count - 1;
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
        console.log(this.state);
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1 </button>
                <button onClick={this.handleMinusOne}> -1 </button>
                <button onClick={this.handleReset}> Reset </button>
            </div>
        );
    }
}