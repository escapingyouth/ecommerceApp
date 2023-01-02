import Modal from '@mui/material/Modal';

import { ModalContainer } from './modal-box.styles';

const ModalBox = ({ open, handleClose, children }) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<ModalContainer>{children}</ModalContainer>
		</Modal>
	);
};

export default ModalBox;
