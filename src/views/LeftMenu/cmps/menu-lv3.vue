<template>
	<ul></ul>
</template>

<script>
export default {
	name: 'menu-lv3',
	props: {
		menu: {
			type: Array,
		},
	},
	data() {
		return {
			isExpand: false,
		}
	},
}
</script>

<style scoped>
.list {
	overflow: hidden;
	transition: max-height ease-in-out 0.6s;
}
.poniter {
	cursor: pointer;
}
</style>
