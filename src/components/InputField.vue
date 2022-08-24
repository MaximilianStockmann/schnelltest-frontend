<template>
	<label class="input-label" for="test"
		>{{ props.formInput.label }} <p v-if="props.formInput.isMandatory">*</p></label
	>
	<input class="input-box" id="test" />
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
