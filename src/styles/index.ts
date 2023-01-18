import { createStitches } from '@stitches/react'

export const {
	config,
	styled,
	css,
	globalCss,
	keyframes,
	createTheme
} = createStitches({
	media: {
    bp1: '(min-width: 375px)',
    bp2: '(min-width: 770px)',
    bp3: '(min-width: 1440px)',	
	},
	theme: {
		colors: {
			white: '#FFF',
			blue100: '#666CA3',
			blue500: '#4851FF',
			blue700: '#13183F',
			gray300: '#83869A',
			pink100: '#FFA7C3',
			pink500: '#F74780',
			pink700: '#F02AA6',
			orange500: '#FF6F48',
		},
		fontSizes: {
			'heading-xl': '3.5rem',
			'heading-l': '2.85rem',
			'heading-m': '2rem',
			'heading-s': '1.5rem',
			'body-m': '1.125rem',
			'body-s': '1rem',
		},
		lineHeights: {
			'heading-xl': '4.375rem',
			'heading-l': '3.1875rem',
			'heading-m': '2.5rem',
			'heading-s': '1.75rem',
			'body-m': '1.75rem',
		},
		fontWeights: {
			normal: '500',
			bold: '700',
			'extra-bold': '800',
		},
		radii: {
			buttons: '50px',
		}
	}
})