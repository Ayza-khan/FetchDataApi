 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import UserData from "./UserData.jsx";
const API = "https://api.coingecko.com/api/v3/coins/list?include_platform=true";
 

function App() {
  const [users, setUsers] = useState([]);
    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    } 
    useEffect(() => {
        fetchUsers(API);
    }, [])
  return (
    <div className="App">
      <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
 
    </div>
  );
}

export default App;
