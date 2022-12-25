import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import './modal-box.scss';

const ModalBox = ({ open, handleClose, children }) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box className='modal-container'>{children}</Box>
		</Modal>
	);
};

export default ModalBox;
