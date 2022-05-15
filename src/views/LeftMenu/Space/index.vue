<template>
	<div>
		<h2>
			{{ `space:${$route.params.spaceId}, topic:${$route.params.topicId}` }}
		</h2>
	</div>
</template>

<script>
export default {
	name: 'SpaceView',
}
</script>

<style scoped></style>
