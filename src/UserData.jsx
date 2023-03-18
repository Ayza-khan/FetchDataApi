import React from 'react'; 

const UserData=({users})=>{
    return (
        <div>
          {
            users.map((curUser)=>{
                const {id , symbol, name, platform }= curUser;
                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{symbol}</td>
                        <td>{name}</td>
                        <td>{platform}</td> 
                    </tr>
                )
            })
          }
        </div>
      );
}
export default UserData;
