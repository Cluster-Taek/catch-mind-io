import { sva } from '@/styled-system/css';
import { Box } from '@/styled-system/jsx';

interface IBadgeProps {
  children?: React.ReactNode;
  type?: 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
}

const Badge = ({ children, type, size }: IBadgeProps) => {
  const badgeStyle = BadgeSva({ type, size });
  return (
    <Box className={badgeStyle.wrapper}>
      <span>{children}</span>
    </Box>
  );
};

export default Badge;

const BadgeSva = sva({
  slots: ['wrapper'],
  base: {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'fit-content',
      borderRadius: '10rem',
      border: '1px solid',
      pointerEvents: 'none',
    },
  },
  variants: {
    type: {
      success: {
        wrapper: {
          backgroundColor: 'green.600',
          borderColor: 'green.600',
          color: 'white',
        },
      },
      danger: {
        wrapper: {
          backgroundColor: 'red.600',
          borderColor: 'red.600',
          color: 'white',
        },
      },
      warning: {
        wrapper: {
          backgroundColor: 'yellow.600',
          borderColor: 'yellow.600',
          color: 'white',
        },
      },
      info: {
        wrapper: {
          borderColor: 'black',
          color: 'black',
        },
      },
    },
    size: {
      small: {
        wrapper: {
          padding: '0.25rem 0.5rem',
          fontSize: '0.5rem',
          fontWeight: 'bold',
        },
      },
      medium: {
        wrapper: {
          padding: '0.25rem 1rem',
          fontSize: '0.875rem',
          fontWeight: 'bold',
        },
      },
      large: {
        wrapper: {
          padding: '1rem 2rem',
          fontSize: '1.25rem',
          fontWeight: 'bold',
        },
      },
    },
  },
  defaultVariants: {
    type: 'info',
    size: 'medium',
  },
});
