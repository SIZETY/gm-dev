<template>
	<ul>
		<template v-for="(lv1, idx1) in list">
			<!-- 一级带子菜单菜单 -->
			<li v-if="lv1.sub" :key="idx1">
				<div>{{ lv1.title }}</div>
				<ul>
					<template v-for="(lv2, idx2) in lv1.sub">
						<!-- 二级带子菜单的菜单 -->
						<li
							v-if="lv2.sub"
							:key="idx2"
							@dragover="(e) => dragover(e, lv2, lv1)"
						>
							<div>{{ lv2.title }}</div>
							<ul>
								<li
									v-for="(lv3, idx3) in lv2.sub"
									:key="idx3"
									draggable="true"
									@drag="(e) => drag(e, lv3, lv2)"
									@dragover="(e) => dragover(e, lv3, lv2)"
									@dragend="dragend"
								>
									{{ lv3.title }}
								</li>
							</ul>
						</li>

						<li
							v-else
							:key="idx2"
							draggable="true"
							@drag="(e) => drag(e, lv2, lv1)"
							@dragover="(e) => dragover(e, lv2, lv1)"
							@dragend="dragend"
						>
							{{ lv2.title }}
						</li>
					</template>
				</ul>
			</li>

			<!-- 一级菜单 -->
			<li v-else :key="idx1">{{ lv1.title }}</li>
		</template>
	</ul>
</template>

<script>
export default {
	name: 'MenuDrag',
	data() {
		return {
			list: [
				{
					title: 'personal',
					sub: [
						{
							title: 'space 1',
							type: 'space',
							lv: 2,
							sub: [
								{
									title: 'topic 1',
									type: 'topic',
									lv: 3,
								},
								{
									title: 'topic 2',
									type: 'topic',
									lv: 3,
								},

								{
									title: 'topic 3',
									type: 'topic',
									lv: 3,
								},
							],
						},
						{
							title: 'topic 4',
							type: 'topic',
							lv: 2,
						},
						{
							title: 'topic 5',
							type: 'topic',
							lv: 2,
						},
						{
							title: 'space 2',
							type: 'space',
							lv: 2,
							sub: [
								{
									title: 'topic 6',
									type: 'topic',
									lv: 3,
								},
								{
									title: 'topic 7',
									type: 'topic',
									lv: 3,
								},

								{
									title: 'topic 8',
									type: 'topic',
									lv: 3,
								},
							],
						},
						{
							title: 'space 3',
							type: 'space',
							lv: 2,
							sub: [],
						},
					],
				},
			],
			currentMenu: null,
			currentMenuParent: null,
			overMenu: null,
			overMenuParent: null,
		}
	},
	methods: {
		drag(e, menu, parent) {
			e.preventDefault()
			this.currentMenu = menu
			this.currentMenuParent = parent
		},
		dragover(e, menu, parent) {
			e.preventDefault()
			this.overMenu = menu
			this.overMenuParent = parent
		},
		dragend() {
			const currentMenu = this.currentMenu
			const currentMenuParent = this.currentMenuParent
			const overMenu = this.overMenu
			const overMenuParent = this.overMenuParent

			// console.log(currentMenu, overMenu)
			if (
				currentMenu !== null &&
				overMenu !== null &&
				overMenu !== currentMenuParent
			) {
				// 有对应的值
				if (currentMenu.lv - overMenu.lv === 1 && overMenu.type !== 'topic') {
					// lv3 移到 lv2
					// console.log(currentMenu, overMenu, overMenuParent)
					const index = currentMenuParent.sub.findIndex(
						(item) => item === currentMenu
					)
					overMenu.sub.push(currentMenu)
					currentMenuParent.sub.splice(index, 1)
				} else if (currentMenu.lv - overMenu.lv === 0) {
					// lv2 移动到 lv3
					console.log(currentMenu, overMenu, overMenuParent)
					const index = currentMenuParent.sub.findIndex(
						(item) => item === currentMenu
					)
					currentMenuParent.sub.splice(index, 1)

					overMenu.sub.push(currentMenu)
				}
			}
		},
	},
}
</script>

<style scoped>
ul {
	padding-left: 10px;
}
</style>
