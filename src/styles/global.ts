import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
		boxSizing: 'border-box',
  },

	html: {
		'@bp1': {
			fontSize: '87.5%',
		},
		'@bp2': {
			fontSize: '87.5%',
		},
		'@bp3': {
			fontSize: '100%',
		}
	},

  body: {
    '-webkit-font-smoothing': 'antialised',
    background: '$white',
	},

  'body, input, textarea, button': {
    fontFamily: 'Plus Jakarta Sans',
  }
})