export function getSpinnerHTML({ id, className, size = 80 }: { id?: string; className?: string; size?: number }) {
    const style = `
	.lds-ripple {
		display: inline-block;
		position: relative;
		width: ${size}px;
		height: ${size}px;
	}
	.lds-ripple div {
		position: absolute;
		border: ${Math.ceil(size / 20)}px solid grey;
		opacity: 1;
		border-radius: 50%;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	.lds-ripple div:nth-child(2) {
		animation-delay: -0.5s;
	}
	@keyframes lds-ripple {
		0% {
			top: ${Math.round(size / 2)}px;
			left: ${Math.round(size / 2)}px;
			width: 0;
			height: 0;
			opacity: 0;
		}
		4.9% {
			top: ${Math.round(size / 2)}px;
			left: ${Math.round(size / 2)}px;
			width: 0;
			height: 0;
			opacity: 0;
		}
		5% {
			top: ${Math.round(size / 2)}px;
			left: ${Math.round(size / 2)}px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: 0px;
			left: 0px;
			width: ${size}px;
			height: ${size}px;
			opacity: 0;
		}
	}
	  
	`

    return `
		<div id="${id}" class="${className}">
			<style>${style}</style>
			<div class="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	`
}
