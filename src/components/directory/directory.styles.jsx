import styled from 'styled-components';

export const DirectoryContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 100vh);
	row-gap: 0.3rem;

	@media screen and (max-width: 57em) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 30vh);
		column-gap: 0.3rem;
	}
	@media screen and (max-width: 46em) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(6, 50vh);
	}
	@media screen and (max-width: 26em) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(6, 50vh);
	}
`;
