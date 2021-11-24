import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children: string;
}

export const Child = ({color, onClick}: ChildProps) => {
    return(
        <div>
            <h1>Child (no React.FC)</h1>
            <h3>This is a func. component, but we havent defined the React.FC. This is the prop we received: {color}</h3>
            <button onClick={onClick}>Click me!</button>
        </div>
    );
};

//Benefit of doing it this way is that you have access to the children prop which comes with React Components.
//You can now have an opening and closing tag for the component you have created, WITHOUT having to define children props in the interface
export const ChildAsFunctionalComponent: React.FC<ChildProps> = ({color, onClick, children}: ChildProps) => {
    return(
        <div>
            <h1>Child (with React.FC)</h1>
            <h3>By using React.FC with the interface or Type props, we let TS know that this is a Functional Component!</h3>
            <h5>You now have access to properties like .displayName, which regular react components have access to </h5>
            <button onClick={onClick}>Click me!</button>
            <div>
                <h4>Children below (only React.FC):  </h4>
                <p>{children}</p>
            </div>
        </div>
    );
};