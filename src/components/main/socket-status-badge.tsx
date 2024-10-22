'use client';

import Badge from '../common/badge';
import { useSocket } from '@/hooks/use-socket';
import { Box } from '@/styled-system/jsx';

const SocketStatusBadge = () => {
  const { isConnected } = useSocket();
  return (
    <Box>
      {isConnected ? (
        <Badge type="success" size="small">
          connected
        </Badge>
      ) : (
        <Badge type="danger" size="small">
          disconnected
        </Badge>
      )}
    </Box>
  );
};

export default SocketStatusBadge;
