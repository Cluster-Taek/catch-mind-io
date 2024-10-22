import { sva } from '@/styled-system/css';
import { Box } from '@/styled-system/jsx';
import { BounceLoader } from 'react-spinners';

const Spinner = () => {
  const spinnerStyle = SpinnerSva();
  return (
    <Box className={spinnerStyle.wrapper}>
      <BounceLoader />
    </Box>
  );
};

export default Spinner;

const SpinnerSva = sva({
  slots: ['wrapper'],
  base: {
    wrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
});
