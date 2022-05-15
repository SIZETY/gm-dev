<template>
	<li
		class="el-menu-item"
		role="menuitem"
		tabindex="-1"
		:style="[paddingStyle, itemStyle, { backgroundColor }]"
		:class="{
			'is-active': active,
			'is-disabled': disabled,
		}"
		@click="handleClick"
		@mouseenter="onMouseEnter"
		@focus="onMouseEnter"
		@blur="onMouseLeave"
		@mouseleave="onMouseLeave"
	>
		<el-tooltip
			v-if="
				parentMenu.$options.componentName === 'ElMenu' &&
				rootMenu.collapse &&
				$slots.title
			"
			effect="dark"
			placement="right"
		>
			<div slot="content"><slot name="title"></slot></div>
			<div
				style="
					position: absolute;
					left: 0;
					top: 0;
					height: 100%;
					width: 100%;
					display: inline-block;
					box-sizing: border-box;
					padding: 0 20px;
				"
			>
				<slot></slot>
			</div>
		</el-tooltip>
		<template v-else>
			<slot></slot>
			<slot name="title"></slot>
		</template>
	</li>
</template>

<script>
export default {
	name: 'menuItem',
}
</script>

<style scoped></style>
