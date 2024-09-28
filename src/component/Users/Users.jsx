import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2>total users: {users.length}</h2>
            <div className="usersDiv">
            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
            </div>
            
        </div>
    );
};

export default Users;