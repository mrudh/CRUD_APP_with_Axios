import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
	  const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const postData = () => {
        axios.post("https://6519913b818c4e98ac608479.mockapi.io/users",{
            name:name,
            age:25,
            hobbies:['dance','art','sing','code'],
        })
        .then((res) => {
            getData();
        })
        .catch((err) => {
            console.err(err);
        })
    };

    const updateData = (id) =>{
        axios.put(`https://6519913b818c4e98ac608479.mockapi.io/users/${id}`,{
            name:name,
            age:25,
            hobbies:['dance','art','sing','code','sleep'],
        })
        .then((res) => {
            getData();
        })
        .catch((err) => {
            console.err(err);
        });
    }

    const deleteData = (id) =>{
        axios.delete(`https://6519913b818c4e98ac608479.mockapi.io/users/${id}`)
        .then((res) => {
            getData();
        })
        .catch((err) => {
            console.err(err);
        });
    }

    const getData = () => {
        axios.get("https://6519913b818c4e98ac608479.mockapi.io/users")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.err(err);
        })
    }

    useEffect(()=>{
        getData();
    },[])
    
	return (
		<div>
            <input placeholder="name" onChange={(event)=> setName(event.target.value)}/>
            <button onClick={postData}>POST Data</button>
            {users.map((user) => {
                return (
                    <>
                        <h2>{`${user.id}. ${user.name}`}</h2>
                        <button onClick={() => updateData(user.id)}>update</button>
                        <button onClick={() => deleteData(user.id)}>delete</button>
                    </>
                )
            })}
        </div>
	)
}

export default App;
