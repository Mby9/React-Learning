"use strict";

console.log("App.js is running");

//JSX - JavaScript XML

// create app object
//use title/subtitles in the template
//render template
//only render subtutle (and p tag) if subtitle exists - logical and operatr
// render new p tag - if options.length > 0 "here are your options" "No options"

var app = {
    title: "Indecision App",
    subtitle: "Some random text",
    options: ["Item 1", "Item 2"]
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (opiton) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
    console.log("Form submitted");
};

var reRender = function reRender(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (opiton) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
    console.log("Form submitted");
};

var numbers = [55, 101, 1000];

var renderPage = function renderPage() {
    var template = //parenthesis is totally optional. Only for formatting purpose 
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " ",
            app.title,
            " "
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        [99, 98, 97] /*Same as {99}{98}{97} */
        [(React.createElement(
            "p",
            { key: "1" },
            "a"
        ), React.createElement(
            "p",
            { key: "2" },
            "b"
        ), React.createElement(
            "p",
            { key: "3" },
            "c"
        ))] /*JSX supports arrays */
        ,
        numbers.map(function (number) {
            return React.createElement(
                "p",
                { key: number },
                " Number: ",
                number
            );
        }),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    " ",
                    option,
                    " "
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            " ",
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        ),
        React.createElement(
            "form",
            { onClick: reRender },
            " ",
            React.createElement(
                "button",
                null,
                "Reset"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');

renderPage();
