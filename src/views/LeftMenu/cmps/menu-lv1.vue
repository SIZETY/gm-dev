<template>
	<ul>
		<template v-for="(item, index) in menu">
			<router-link :to="item.route" :key="index">
				<li :class="{ active: item.route === $route.path }">
					{{ item.title }}
				</li>
			</router-link>
		</template>
	</ul>
</template>

<script>
export default {
	name: 'menu-lv1',
	props: {
		menu: {
			type: Array,
		},
	},
	mounted() {
		console.log(this.$route.path)
	},
}
</script>

<style scoped></style>
