<template>
	<div>
		<h2>home</h2>
		<sy-menu> </sy-menu>
		<y-menu></y-menu>
	</div>
</template>

<script>
import SyMenu from '@/components/SYMenu'
import { YMenu } from '@/baseUI/menu'

export default {
	name: 'Home',
	components: {
		SyMenu,
		YMenu,
	},
}
</script>

<style scoped></style>
