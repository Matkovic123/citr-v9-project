const Pizza= (props) => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, props.name),
      React.createElement("p", {}, props.description)
    ]
  )
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Padre Gino's"),
      React.createElement(Pizza, {name: "Pepperoni Pizza", description:"Dope pizza yo"}),
      React.createElement(Pizza, {name:"Americano", description:"Hot dogs and fries"}),
      React.createElement(Pizza, {name:"Hawaiian", description:"pinaeapples and crap"}),
      React.createElement(Pizza, {name:"Chicken", description:"chicken nuggets on pizza"}),
      React.createElement(Pizza, {name:"Potato", description:"irish chips on pizza"}),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));