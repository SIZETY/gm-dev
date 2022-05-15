<template>
	<ul class="sy-menu">
		<li>item 1</li>
		<li>item 2</li>
		<li>item 3</li>
		<li>item 4</li>
	</ul>
</template>

<script>
export default {
	name: 'SyMenu',
}
</script>

<style scoped>
.sy-menu {
	border: 1px solid black;
}

.sy-menu li:hover {
	background-color: cyan;
}
</style>
