<template>
	<ul>
		<template v-for="(menuLv1, idx1) in menu">
			<li v-if="menuLv1.sub" :key="idx1">
				<div class="poniter" @click="isExpand = !isExpand">
					{{ menuLv1.title }}
				</div>
				<ul
					class="list"
					:style="{
						'max-height': isExpand ? menuLv1.sub.length * 20 + 'px' : 0,
					}"
				>
					<template v-for="(menuLv2, idx2) in menuLv1.sub">
						<router-link :to="menuLv2.route" :key="idx2">
							<li
								:class="{ active: menuLv2.route === $route.path }"
								draggable="true"
								@drag="(e) => drag(e, idx2)"
								@dragover="(e) => dragover(e, idx2)"
								@dragend="dragend"
							>
								{{ menuLv2.title }}
							</li>
						</router-link>
					</template>
				</ul>
			</li>

			<router-link :to="menuLv1.route" :key="idx1" v-else>
				<li :class="{ active: menuLv1.route === $route.path }">
					{{ menuLv1.title }}
				</li>
			</router-link>
		</template>
	</ul>
</template>

<script>
export default {
	name: 'menu-lv2',
	props: {
		menu: {
			type: Array,
		},
	},
	data() {
		return {
			isExpand: false,
			currentIndex: undefined,
			overIndex: undefined,
		}
	},
	methods: {
		drag(e, index) {
			e.preventDefault()
			this.currentIndex = index
		},
		dragover(e, index) {
			e.preventDefault()
			this.overIndex = index
		},
		dragend() {
			if (this.currentIndex !== undefined && this.overIndex !== undefined) {
				this.$emit('change', this.overIndex, this.currentIndex)
			}
		},
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
