<template>
	<div class="home-page">
		<aside>
			<h2><i>i </i> GEMOO <i>s</i> <i>s</i></h2>
			<ul class="menu">
				<template v-for="lv1 in routeList">
					<menu-item
						:route="lv1.route"
						:active="lv1.active"
						:key="lv1.route"
						v-if="lv1.type === 1"
					>
						<template v-slot:item> <i></i> {{ lv1.title }} </template>
					</menu-item>
					<sub-menu
						v-else-if="lv1.type === 2"
						:key="lv1.route"
						:active="lv1.active"
						:listLength="getMaxSubLength(lv1.sub) + 1"
					>
						<template v-slot:title> {{ lv1.title }} </template>
						<template v-slot:createBtn v-if="lv1.title === 'Personal'">
							<create-new></create-new>
						</template>

						<template v-slot:list>
							<template v-for="lv2 in lv1.sub">
								<sub-menu
									v-if="lv2.type === 'space'"
									:active="lv2.active"
									:key="lv2.route"
									:listLength="lv2.sub.length"
								>
									<template v-slot:title> {{ lv2.title }} </template>

									<template v-slot:list>
										<template v-for="(lv3, index) in lv2.sub">
											<menu-item
												:route="lv3.route"
												:active="lv3.active"
												:key="index"
											>
												<template v-slot:item>
													<i></i> {{ lv3.title }}
												</template>
											</menu-item>
										</template>
									</template>
								</sub-menu>

								<menu-item
									v-else
									:route="lv2.route"
									:active="lv2.active"
									:key="lv2.route"
								>
									<template v-slot:item> <i></i> {{ lv2.title }} </template>
								</menu-item>
							</template>
						</template>
					</sub-menu>
				</template>
			</ul>
		</aside>

		<section class="main">
			<router-view></router-view>
		</section>
	</div>
</template>

<script>
import { leftBarConf } from './pageSrc/leftBarConf'

import SubMenu from './pageSrc/cmps/submenu.vue'
import MenuItem from './pageSrc/cmps/menu-item.vue'
import CreateNew from './pageSrc/cmps/create-new.vue'

export default {
	name: 'HOME',
	components: {
		SubMenu,
		MenuItem,
		CreateNew,
	},
	data() {
		return {
			title: 'Home',
			routeList: [...leftBarConf],
		}
	},
	beforeUpdate() {
		console.log(this.$route)
		this.setCurrentRouteActive()
	},
	beforeMount() {
		this.setCurrentRouteActive()
		console.log(this.routeList)
	},
	methods: {
		setCurrentRouteActive() {
			this.routeList.forEach((menuLv1) => {
				if (menuLv1.type === 1) {
					if (menuLv1.active) menuLv1.active = false
					if (menuLv1.route === this.$route.path) menuLv1.active = true
				} else if (menuLv1.type === 2) {
					menuLv1.sub.forEach((menuLv2) => {
						console.log(this.$route.path, menuLv2.route === this.$route.path)

						if (menuLv2.active) menuLv2.active = false
						if (menuLv2.route === this.$route.path) {
							menuLv1.active = true
							menuLv2.active = true
						} else if (menuLv2.sub) {
							menuLv2.sub.forEach((menuLv3) => {
								if (menuLv3.active) menuLv3.active = false
								if (menuLv3.route === this.$route.path) {
									menuLv1.active = true
									menuLv2.active = true
									menuLv3.active = true
								}
							})
						}
					})
				}
			})
		},
		getMaxSubLength(sub) {
			const len = sub.length
			let max = 0
			console.log('first', sub)
			sub.forEach((item) => {
				console.log('item', item)
				if (item.sub && item.sub.length > max) {
					max = item.sub.length
				}
			})

			return len + max
		},
	},
}
</script>

<style scoped>
@import './style.css';
</style>
