<template>
	<li>
		<div @click="changeExpandStatus" class="menu-header">
			<slot name="title"></slot>
		</div>
		<ul
			class="menu-list"
			:style="{
				'max-height': isFold ? listLength * defaultHeight + 'px' : 0,
			}"
			ref="list"
		>
			<li><slot name="createBtn"></slot></li>
			<slot name="list"></slot>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'SubMenu',
	props: {
		active: {
			type: Boolean,
		},
		listLength: {
			type: Number,
		},
	},
	data() {
		return {
			isFold: true,
			defaultHeight: 24,
		}
	},
	mounted() {
		console.log('active', this.active)
		this.isFold = !this.active
	},
	methods: {
		changeExpandStatus() {
			this.isFold = !this.isFold
		},
	},
}
</script>

<style scoped>
.menu-title {
	cursor: pointer;
}

.menu-list {
	transition: max-height ease-in-out 0.4s;
	overflow: hidden;
}

.fold {
	max-height: 0;
	transition: max-height ease-in-out 0.4s;
}
</style>
