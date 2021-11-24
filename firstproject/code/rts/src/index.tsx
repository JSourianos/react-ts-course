import {useState} from "react";
import ReactDOM from "react-dom";

//Components
import Parent from "./props/Parent";
import {GuestList} from "./GuestList";
import {UserSearch} from "./UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearchWithRefs from "./refs/UserSearchWithRefs";

const App = () => {
    const [hidden, setHidden] = useState(true);
    const [sectionThreeHidden, setSectionThreeHidden] = useState(false);

    return(
        <>
            <button onClick={() => setHidden(!hidden)}>Show Code Examples from Section Two</button>
            <button onClick={() => setSectionThreeHidden(!sectionThreeHidden)}>Code Examples from Section Three</button>
            {/* SECTION 2 */}
            <div style={{display: hidden ? "none" : "block"}}>
                <h1>Basics of React with TypeScript</h1>
                <Parent />
                <div style={{"width": "100%", border: "4px solid black", marginTop: "2rem"}}></div>
                <br />
                <br />

                <h3>Basics of React with TS and State</h3>
                <GuestList />
                <div style={{"width": "100%", border: "4px solid black", marginTop: "2rem"}}></div>
                <br />
                <br />

                <h3>Search Component</h3>
                <UserSearch />
            </div>
            {/* SECTION 3 */}
            <div style={{display: sectionThreeHidden ? "none" : "block"}}>
            <EventComponent />
            <div style={{"width": "100%", border: "4px solid black", marginTop: "2rem"}}></div>
            <br />
            <br />

            <UserSearchWithRefs />
            </div>
        </>
    );
};

ReactDOM.render(<App  />, document.getElementById("root"));