import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Jhonata', 'Junior', 'Oliveira', 'Santos']);
    const [users, setUsers] = useState([
        { id: 1, name: "Jhow", age: 23 },
        { id: 2, name: "João", age: 27 },
        { id: 3, name: "Luis", age: 29 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => { //prevUsers é o estado atual. 
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };


    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}> {item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}> {user.name} - {user.age} </li>
                ))}
            </ul>
            <button onClick={deleteRandom}> Delete random User</button>
        </div>

    )
}

export default ListRender