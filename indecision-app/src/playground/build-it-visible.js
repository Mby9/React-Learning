class VisibilityToggle extends React.Component {
    constructor (props) {
        super (props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility = false
        };
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.this.toggleVisibility}> 
                    {this.state.visibility ? "Hide Details" : "Show Details"} </button>
                <button> {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can see!!!!</p>
                    </div>
                )} </button>
            </div>
        );
    }
}