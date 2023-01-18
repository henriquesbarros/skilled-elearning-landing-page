import { styled } from "../../styles";

export const ContainerAbout = styled('section', {
	marginTop: '2.75rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '1.85rem',
});

export const TextAbout = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',

	h1: {
		alignSelf: 'center',
		color: '$blue700',
		fontSize: '$heading-l',
		fontWeight: '$extra-bold',
		lineHeight: '$heading-l',
	},

	p: {
		color: '$gray300',
		fontSize: '$body-s',
		fontWeight: '$normal',
		lineHeight: '$body-m',
		textAlign: 'left',

		margin: '1.7rem 0',
	}
});

export const TextBox = styled('div', {
	paddingLeft: '1rem',
});