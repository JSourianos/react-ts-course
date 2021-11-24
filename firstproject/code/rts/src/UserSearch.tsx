import {useState} from "react";

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

export const UserSearch: React.FC = () => {
    const [search, setSearch] = useState("");
    const [searchedUser, setSearchedUser] = useState<User[]>([]);

    const handleSearch = () => {
        const searchedUser = users.filter(user => user.name === search);
        setSearchedUser(searchedUser);
    }

    return(
        <div>
            <h1>Search for a user</h1>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />

            <button onClick={handleSearch}>Search</button>
            <h3>Searched user: </h3>

            {searchedUser.length !== 0 ?
                searchedUser.map(user => <h3>{user.name}, age: {user.age}</h3>) : <h3>No user found...</h3>
            }
        </div>
    );
};