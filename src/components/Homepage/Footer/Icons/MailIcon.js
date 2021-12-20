import * as React from "react";

const SvgComponent = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
		<path
			d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
			fill="#2eb5c0"
		/>
		<path
			d="M16.224 15.102c-1.25 0-7.69-3.652-7.69-3.652v-.57A1.28 1.28 0 0 1 9.815 9.6h12.817a1.28 1.28 0 0 1 1.282 1.28l-.01.64s-6.37 3.582-7.68 3.582zm0 1.76c1.37 0 7.68-3.422 7.68-3.422l.01 7.68a1.28 1.28 0 0 1-1.282 1.28H9.815a1.28 1.28 0 0 1-1.281-1.28l.01-7.68c-.001 0 6.429 3.422 7.679 3.422z"
			fill="#fff"
		/>
	</svg>
);

export default SvgComponent;
