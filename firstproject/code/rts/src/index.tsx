import ReactDOM from "react-dom";

import Parent from "./props/Parent";
import {GuestList} from "./GuestList";
import {UserSearch} from "./UserSearch";

const App = () => {
    return(
        <div>
            <h1>Basics of React with TypeScript</h1>
            <Parent />
            <br />
            <br />

            <h3>Basics of React with TS and State</h3>
            <GuestList />
            <br />
            <br />

            <h3>Search Component</h3>
            <UserSearch />
        </div>
    );
};

ReactDOM.render(<App  />, document.getElementById("root"));