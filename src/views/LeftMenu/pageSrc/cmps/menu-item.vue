<template>
	<router-link :to="route">
		<li :class="{ active }">
			<slot name="item"></slot>
		</li>
	</router-link>
</template>

<script>
export default {
	name: 'MenuItem',
	props: {
		route: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			required: true,
		},
	},
}
</script>

<style scoped></style>
