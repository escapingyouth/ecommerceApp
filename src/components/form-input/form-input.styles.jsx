import styled from 'styled-components';

export const Form = styled.form`
	height: 17rem;
	overflow-y: scroll;
	padding: 0 0.1rem;

	&::-webkit-scrollbar-thumb {
		background-color: #ccc;
	}

	@media only screen and (max-width: 33em) {
		overflow: unset;
	}
`;

export const FormGroup = styled.div`
	label {
		font-size: 0.9rem;
	}
`;
export const Input = styled.input`
	display: block;
	font-family: inherit;
	width: 100%;
	padding: 1em 0.5em;
	margin: 0.7rem 0 1.4rem 0;
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 0.9rem;

	&:focus {
		outline: 1px solid #000;
	}
`;
export const NewUser = styled.div`
	text-align: center;
	margin-top: 2rem;
	text-decoration: underline;
	cursor: pointer;

	&:hover {
		color: #495057;
	}
`;
