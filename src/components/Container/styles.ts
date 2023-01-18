import { styled } from "../../styles";

export const ContainerWrapper = styled('div', {
	'@bp1': {
		maxWidth: '770px',
		padding: '1.25rem 1.25rem 0',
	},

	'@bp2': {
		maxWidth: '1440px',
		padding: '1.25rem 1.25rem 0',
		margin: '0 auto'
	}
})