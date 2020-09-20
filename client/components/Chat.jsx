import React, { useState } from 'react';
import io from 'socket.io-client';
import { useEffect } from 'react';


export default() => {
    const [ messages, setMessages ] = useState([]);
    const [socket] = useState(() => io(':8000'));


 
    useEffect(() => {
        socket.on("new_message_from_server", msg =>
            setMessages(prevMessages =>{
                return [msg, ...prevMessages];
            })
        );

    }, []);
    
    var current_user;
    function get_name() {
        var new_user = prompt("What is your username?");
        current_user = new_user;
        socket.emit('create:name', {username: new_user});
    }
    get_name();

    



    return (
        <div>
            <h1>MERN Chat</h1>
            <h2>Get started right now!</h2>
            <p>I want to start chatting with the name...</p>
            <input></input>
            <button>Start chatting</button>

        </div>
        
        
    );
}