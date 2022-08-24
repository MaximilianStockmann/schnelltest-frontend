<template>
	<label for="test">{{ props.formInput.label }}</label>
	<input id="test" />
</template>

<script setup lang="ts">
	import {formInput} from "@/scripts/util/formInput";
	const props = defineProps<{
		formInput: formInput;
	}>();

	console.log(props.formInput);
</script>

<style lang="scss">
	@import "@/styles/components/inputField.scss";
</style>
