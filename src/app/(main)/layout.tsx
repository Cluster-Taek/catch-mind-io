import LogoutButton from '@/components/common/logout-button';
import SocketStatusBadge from '@/components/main/socket-status-badge';
import { sva } from '@/styled-system/css';
import { Box } from '@/styled-system/jsx';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const layoutStyle = LayoutSva();
  return (
    <Box className={layoutStyle.wrapper}>
      <Box>
        {children}
        <Box className={layoutStyle.rightTopWrapper}>
          <SocketStatusBadge />
        </Box>
        <Box className={layoutStyle.rightBottomWrapper}>
          <LogoutButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

const LayoutSva = sva({
  slots: ['wrapper', 'rightTopWrapper', 'rightBottomWrapper'],
  base: {
    wrapper: {
      display: 'block',
    },
    rightTopWrapper: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      display: 'block',
    },
    rightBottomWrapper: {
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
      display: 'block',
    },
  },
});
