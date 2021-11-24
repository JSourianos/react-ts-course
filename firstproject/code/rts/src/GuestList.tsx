import React, {useState} from "react";

export const GuestList: React.FC = () => {
    const [name, setName] = useState(""); //here we can use type inference, since ts will know that this is a string
    const [guests, setGuests] = useState<string[]>([]); //here we need to specify what should be inside the array

    const handleOnClick = () => {
        setGuests(prevState => [...prevState, name]);
        setName("");
    }

    return(
        <div>
            <h1>This is the guestlist</h1>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleOnClick}>Add guest</button>

            <div>
                <ul>

                {guests.map((guest, index) => {
                    return <li key={index}>{guest}</li>
                })}
                </ul>
            </div>
        </div>
    )
}