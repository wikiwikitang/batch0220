import { useDispatch, useSelector } from 'react-redux';
import { closeErrorModal } from '../actions/index';

const ErrorModal = () => {
  const { error, errorMessage } = useSelector((state) => state.error);
  const dispatch = useDispatch();
  if (!error) {
    return null;
  }

  const handleCloseModal = () => {
    dispatch(closeErrorModal());
  };

  return (
    <div className='error-modal'>
      <div>{errorMessage}</div>
      <div>
        <button onClick={handleCloseModal}>OK</button>
      </div>
    </div>
  );
};

export default ErrorModal;
