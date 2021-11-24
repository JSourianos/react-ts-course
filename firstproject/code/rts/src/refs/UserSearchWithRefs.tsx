import {useState, useRef, useEffect} from 'react'
import React from "react";

const users = [
    {
        name: "Thomas",
        age: 23
    },
    {
        name: "Szymon",
        age: 23
    },
    {
        name: "Arne",
        age: 23
    },
    {
        name: "Sander",
        age: 23
    },
]

interface User {
    name: string;
    age: number;
}

const UserSearchWithRefs: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [search, setSearch] = useState("");
    const [searchedUser, setSearchedUser] = useState<User[]>([]);

    const handleSearch = () => {
        const searchedUser = users.filter(user => user.name === search);
        setSearchedUser(searchedUser);
    }

    useEffect(() => {
        if(!inputRef.current) return; //We need to check if the ref is null, before trying to access it.
        inputRef.current?.focus();
    }, []);

    return (
        <>
        <div>
            <h1>Search for a user</h1>
            <input ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} />

            <button onClick={handleSearch}>Search</button>
            <h3>Searched user: </h3>

            {searchedUser.length !== 0 ?
                searchedUser.map(user => <h3>{user.name}, age: {user.age}</h3>) : <h3>No user found...</h3>
            }
        </div>
        </>
    );
};


export default UserSearchWithRefs;