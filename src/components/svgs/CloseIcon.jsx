import React from "react"
import PropTypes from "prop-types"


const CloseIcon = ({
	fillColor, title, desc, focusable, role,
	titleId, ariaHidden, className }) => {
	return (
		<svg
			aria-labelledby={titleId}
			aria-hidden={ariaHidden}
			className={className}
			focusable={focusable}
			role={role}
			data-icon="times"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512"
		>

			{title && <title id={titleId}>{title}</title> }
			{desc && <desc>{desc}</desc>}

			<path
				fill={fillColor}
				d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
			/>
		</svg>
	)
}


CloseIcon.propTypes = {
	ariaHidden: PropTypes.string,
	className : PropTypes.string,
	desc      : PropTypes.string,
	focusable : PropTypes.string,
	role      : PropTypes.string,
	title     : PropTypes.string,
	titleId   : PropTypes.string,
}

CloseIcon.defaultProps = {
	ariaHidden: `true`,
	fillColor : `currentColor`,
	focusable : `true`,
	role      : `img`,
	titleId   : `closeIconId`,
}


export { CloseIcon }
