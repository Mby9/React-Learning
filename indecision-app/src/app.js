console.log("App.js is running");

//JSX - JavaScript XML

// create app object
//use title/subtitles in the template
//render template
//only render subtutle (and p tag) if subtitle exists - logical and operatr
// render new p tag - if options.length > 0 "here are your options" "No options"

const app = {
    title: "Indecision App",
    subtitle: "Some random text",
    options: ["Item 1", "Item 2"]
}

const onFormSubmit = (e) => {
    e.preventDefault();
 
    const option = e.target.elements.option.value;
    if (opiton) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
    console.log("Form submitted");
    
};

const reRender = (e) => {
    e.preventDefault();
 
    const option = e.target.elements.option.value;
    if (opiton) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
    console.log("Form submitted");
    
};

const numbers = [55, 101, 1000]

const renderPage = () => {
const template = ( //parenthesis is totally optional. Only for formatting purpose 
<div>
    <h1> {app.title} </h1>
    {app.subtitle && <p>{app.subtitle}</p>} 
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <p>{app.options.length}</p>
    {
        [99, 98, 97] /*Same as {99}{98}{97} */
        [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>] /*JSX supports arrays */
    }
    {
        numbers.map((number) => {
            return <p key={number}> Number: {number}</p>
        })
    }
    {/*<ol>
        <li> Item one </li>
        <li> Item two </li>
    </ol>*/}
    <ol>
        {
            app.options.map((option) => {
                return <li key={option}> {option} </li>
            })
        }
    </ol>
    <form onSubmit={onFormSubmit}> {/*not returned value*/}
        <input type="text" name="option"/>
        <button>Add option</button>
    </form>
    <form onClick={reRender}> {/*not returned value*/}
        <button>Reset</button>
    </form>
</div>);
ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('app');

renderPage();