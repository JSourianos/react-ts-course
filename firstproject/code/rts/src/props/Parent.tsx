import React, {useState} from "react";

import {Child, ChildAsFunctionalComponent} from "./Child";

const Parent = () => {
    return (
        <div>
            <Child color={"blue"}  onClick={() => console.log("child btn clicked")} children={"no"}/>
            <ChildAsFunctionalComponent color={"red"} onClick={() => console.log("child as fc clicked")}>
                This should work?
            </ChildAsFunctionalComponent>
        </div>
    )
};

export default Parent;
