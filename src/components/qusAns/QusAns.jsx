const QusAns = () => {
  const title = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  };

  const desc = {
    fontSize: "1.7rem",
    marginBottom: "3rem",
    textTransform: "none",
  };
  return (
    <div>
      <h3 style={title}>1. How does react work?</h3>
      <p style={desc}>
        React is a javascript library. It uses DOM to render the JSX elements
        that we see in the browser. The DOM is called real/actual DOM. When we
        change anything in the browser react compare it with Virtual DOM. Diff
        algorithm compares the difference between Virtual Dom and then react set
        changes in the real DOM. Then we see the changes in the browser.
      </p>
      <h3 style={title}>
        2. What are the differences between props and state?
      </h3>
      <p style={desc}>
        Although props and state are used to control data into a component. But
        they have kinds of differences. Props are used to send data from parent
        to child component on the other hand state are used to change any data.
        Props can't be assigned and read-only. The state can be assigned. Props
        are immutable on the other hand state are mutable.
      </p>
    </div>
  );
};

export default QusAns;
