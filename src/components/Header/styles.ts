import { styled } from "../../styles";

export const HeaderContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',

	'h1': {
		color: '$blue700',
		fontWeight: '$extra-bold',
	}
});