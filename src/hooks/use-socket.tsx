import { socket } from '@/socket';
import { useCallback, useEffect, useState } from 'react';

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false);

  const onConnect = useCallback(() => {
    setIsConnected(true);
  }, []);

  const onDisconnect = useCallback(() => {
    setIsConnected(false);
  }, []);

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, [onConnect, onDisconnect]);

  return { socket, isConnected } as const;
};
