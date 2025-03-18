import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Terminal = () => {
  const [output, setOutput] = useState('');
  const [command, setCommand] = useState('');

  useEffect(() => {
    const socket = io();

    socket.on('cliOutput', (data) => {
      setOutput((prevOutput) => prevOutput + data + '\n');
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        backgroundColor: 'black',
        color: 'limegreen',
        fontFamily: 'monospace',
        padding: '10px',
        borderRadius: '5px',
        minHeight: '250px',
      }}>
        <pre>{output}</pre>
    </div>
    </div>
  );
};

export default Terminal;
