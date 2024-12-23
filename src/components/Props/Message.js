const Message=(props)=>{
    return (
    <div>
        <h2> Welcome, ${props.username}</h2>
        <p> New Event</p>
        <p> Your age is ${props.age}</p>
    </div>)
};

export default Message;
