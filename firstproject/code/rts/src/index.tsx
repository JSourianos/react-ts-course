import ReactDOM from "react-dom";

import Parent from "./props/Parent";

const App = () => {
    return(
        <div>
            <h1>Basics of React with TypeScript</h1>
            <Parent />
        </div>
    );
};

ReactDOM.render(<App  />, document.getElementById("root"));