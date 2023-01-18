import { styled } from "../../styles";

export const ButtonContainer = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontWeight: '$bold',
	fontSize: '$body-s',
	borderRadius: '$buttons',
	border: 'none',
	cursor: 'pointer',


	variants: {
		color: {
			'primary': {
				background: '$blue700',
				color: '$white',

				'&:hover': {
					background: '$blue100',
				},
			},
			'primary-gradient': {
				background: 'linear-gradient(180deg, $orange500 0%, $pink700 100%)',
				color: '$white',

				'&:hover': {
					background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, $orange500 0%, $pink700 100%)',
				}
			},
			'secondary-gradient': {
				background: 'linear-gradient(180deg, $blue500 0%, $pink700 99.92%)',
				color: '$white',
				transition: '0.2s',

				'&:hover': {
					background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, $blue500 0%, $pink700 100%)',
				}
			}
		},
		size: {
			medium: {
				width: '10rem',
				height: '3.45rem',
			},
			large: {
				width: '12rem',
				height: '4rem',
			},
		},
	},

	defaultVariants: {
		color: 'primary',
		size: 'medium',
	}
});