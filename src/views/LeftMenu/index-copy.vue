<template>
	<div class="left-menu">
		<div class="hidden" v-show="!showLeftMenu">
			<button class="open" @click="showLeftMenu = !showLeftMenu">open</button>
		</div>
		<div class="left" v-show="showLeftMenu">
			<h2>
				<span>Left Menu</span>
				<div>
					<i @click="showLeftMenu = !showLeftMenu"> @ </i>
					<i class="menu-setting">
						<span>*</span>
						<ul>
							<li>trash</li>
							<li>storage</li>
						</ul>
					</i>
				</div>
			</h2>

			<!-- lv1 menu -->
			<menu-lv1 :menu="menuLv1" />

			<!-- lv2 menu -->
			<menu-lv2 :menu="menuLv2" @change="insert" />

			<div class="left-menu-ft">
				<div class="avatar-wrap">
					<div class="avatar">
						<div class="img"></div>
					</div>
					<!-- account wrap -->
					<div class="account-wrap">
						<div class="current-account">
							<div class="avatar">
								<div class="img"></div>
							</div>
							<div>
								<div>Debbie <span>Free</span></div>
								<div>4378247@gmail.com</div>
							</div>
						</div>
						<ul class="account-menu">
							<li><div class="item">add account</div></li>
							<li class="divide"><div class="item">sign out</div></li>
							<li><div class="item">my account</div></li>
							<li class="divide">
								<div class="item">notification settings</div>
							</li>
							<li><div class="item">mission rewards</div></li>
							<li class="divide"><div class="item">store</div></li>
							<li><div class="item">download desktop</div></li>
						</ul>
					</div>
				</div>

				<div class="func-wrap">
					<i>noti </i>
					<i> search </i>
					<i> faq</i>
				</div>
			</div>
		</div>

		<!-- right -->
		<div class="right" :class="{ margin: !showLeftMenu }">
			<button @click="showMenuConf">显示当前菜单配置</button>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import MenuLv1 from './cmps/menu-lv1.vue'
import MenuLv2 from './cmps/menu-lv2.vue'

export default {
	name: 'LeftMenu',
	components: {
		MenuLv1,
		MenuLv2,
	},
	data() {
		return {
			showLeftMenu: true,
			menuLv1: [
				{
					route: '/left-menu/path1',
					title: 'path1',
				},
				{
					route: '/left-menu/path2',
					title: 'path2',
				},
				{
					route: '/left-menu/path3',
					title: 'path3',
				},
			],
			menuLv2: [
				{
					title: 'gemoo app',
					sub: [
						{
							route: '/left-menu/video-lib',
							title: 'video',
						},
						{
							route: '/left-menu/image-lib',
							title: 'image',
						},
						{
							route: '/left-menu/image-lib',
							title: 'test1',
						},
						{
							route: '/left-menu/image-lib',
							title: 'test2',
						},
					],
				},
			],
			menuLv3: [
				{
					title: 'personal',
					sub: [
						{
							title: 'space1',
							route: '/left-menu/space/123',
						},
					],
				},
			],
		}
	},
	mounted() {
		console.log(this.menuLv2[0].sub[0])
	},
	methods: {
		insert(overIndex, currentIndex) {
			const list = this.menuLv2[0].sub
			const tmp = { ...list[currentIndex] }

			if (currentIndex < overIndex) {
				// 1 2 3 4 5 -> 1 move to 4
				// 234 左移 1 插入 4 的位置

				for (let i = currentIndex; i < overIndex; i++) {
					Object.keys(list[i]).forEach((key) => {
						list[i][key] = list[i + 1][key]
					})
				}
			} else {
				// 1 2 3 4 5 -> 5 move to 2
				// 234 右移 5 插入 2 的位置

				for (let i = currentIndex; i > overIndex; i--) {
					Object.keys(list[i]).forEach((key) => {
						list[i][key] = list[i - 1][key]
					})
				}
			}

			Object.keys(list[overIndex]).forEach((key) => {
				list[overIndex][key] = tmp[key]
			})
		},
		showMenuConf() {
			console.log(this.menuLv2[0].sub.map((item) => item.title))
		},
	},
}
</script>

<style scoped>
@import './style.css';
</style>
