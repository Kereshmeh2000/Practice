import React, { useState } from 'react';

export default function ChatFooter() {
    const [message, setMessage] = useState('');
    
    return (
        <div className="fixed bottom-0 bg-white p-4 flex items-center border-t border-gray-200 ">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow p-2 bg-gray-100 rounded-lg border border-gray-200 mr-2"
                placeholder="Type a message"
            />
            <button className="bg-blue-500 text-white p-2 rounded-lg">Send</button>
        </div>
    );
}
