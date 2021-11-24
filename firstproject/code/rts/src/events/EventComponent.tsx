import React from "react";

const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    const onDragStart = (e: React.DragEvent<HTMLInputElement>) => {
        console.log(e)
        console.log("dragggged")
    }
    return(
        <div>
            <h1>Event Component</h1>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </div>
    );
};

export default EventComponent;