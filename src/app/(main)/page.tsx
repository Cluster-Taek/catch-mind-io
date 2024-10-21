'use client';

import { useSocket } from '@/hooks/use-socket';
import { useCallback, useEffect, useState } from 'react';

interface IMessage {
  author: string;
  content: string;
}

type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;

export default function Home() {
  const { socket, isConnected } = useSocket();
  const [message, setMessage] = useState<IMessage[]>([]);

  useEffect(() => {
    socket.on('chat message', (msg: IMessage) => {
      setMessage((prev) => [...prev, msg]);
    });
  }, [socket]);

  const handleSubmit = useCallback<HandleSubmit>(
    (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const author = form.get('author') as string;
      const content = form.get('content') as string;
      if (!author || !content) return;

      socket.emit('chat message', { author, content });
    },
    [socket]
  );

  return (
    <div>
      <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
      <ul>
        {message.map((msg, index) => (
          <li key={index}>
            <strong>{msg.author}</strong>: {msg.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input name="author" style={{ width: '70px' }} type="text" placeholder="Your name" />
        <input name="content" style={{ width: '280px' }} type="text" placeholder="Your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
