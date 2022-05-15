<template>
	<div>
		<header class="header" ref="header">
			<div style="left: 200px">page1</div>
			<div style="left: 300px">page2</div>
			<div style="left: 400px">page3</div>
			<div style="left: 500px">page4</div>
		</header>
	</div>
</template>

<script>
export default {
	name: 'Drag',
	data() {
		return {
			locations: [],
		}
	},
	methods: {
		drags(dragDoc) {
			const locations = this.locations
			dragDoc.onmousedown = function (event) {
				const diffX = event.clientX - dragDoc.offsetLeft
				const target = this

				document.onmousemove = function (event) {
					event.preventDefault()

					event || window.event
					let moveX = event.clientX - diffX

					function times() {
						const item = locations.find((item) => item[0] === target)
						const diffX = target.offsetLeft - item[1]
						return diffX / (target.offsetWidth >> 1)
					}

					if (times() > 1) {
						// 向右移动
						const index = locations.findIndex((item) => item[0] === target)
						if (index < locations.length - 1) {
							locations[index][0] = locations[index + 1][0]
							locations[index + 1][0] = target
							locations[index][0].style.left = locations[index][1] + 'px'
						}
					} else if (times() < -1) {
						const index = locations.findIndex((item) => item[0] === target)
						if (index > 0) {
							locations[index][0] = locations[index - 1][0]
							locations[index - 1][0] = target
							locations[index][0].style.left = locations[index][1] + 'px'
						}
					}

					dragDoc.style.left = moveX + 'px'
				}

				document.onmouseup = function () {
					const item = locations.find((item) => item[0] === target)
					target.style.left = item[1] + 'px'

					this.onmousemove = null
					this.onmouseup = null
				}
			}
		},
	},
	mounted() {
		Array.from(this.$refs.header.children).forEach((item) => {
			this.drags(item)
			this.locations.push([item, item.offsetLeft])
		})
	},
}
</script>

<style scoped>
.header {
	height: 50px;
	position: relative;
}
.header div {
	position: absolute;
	border: 1px solid black;
	width: 100px;
	box-sizing: border-box;
	cursor: move;
}
</style>
