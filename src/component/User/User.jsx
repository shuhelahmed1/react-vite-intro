import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email} = user;
    const userStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '5px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <Link to={`users/${id}`}>Show More</Link>
        </div>
    );
};

export default User;