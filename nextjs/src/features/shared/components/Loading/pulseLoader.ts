export function getPulseLoaderHTML({ id, className }: { id?: string; className?: string }) {
    const style = `
		.pulse-loader {
			margin-left: 6px;
			margin-top: 6px;
			display: inline-block;
			width: 2px;
			height: 2px;
			border-radius: 100%;
			background-color: #585858;
			box-shadow:
				0 0 0 0.25px #696969,
				0 0 0 0.5px #808080,
				0 0 0 0.75px #989898,
				0 0 0 1px #a9a9a9,
				0 0 0 1.25px #bebebe,
				0 0 0 1.5px #d0d0d0,
				0 0 0 1.75px #dcdcdc,
				0 0 0 2px #f0f0f0
			;
			animation: pulse-animation;
			animation-duration: 0.75s;
			animation-timing-function: ease-out;
			animation-direction: alternate;
			animation-iteration-count: infinite;
			animation-play-state: running;
		}
		
		@keyframes pulse-animation {
			0% {
				transform: scale(1.75);
			}
			100% {
				transform: scale(3);
			}
		}
	`

    return `
		<div id="${id}" class="${className}">
			<style>${style}</style>
			<div class="pulse-loader"></div>			
		</div>
	`
}
