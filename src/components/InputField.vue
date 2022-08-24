<template>
	<label class="input-label" for="test"
		>{{ props.formInput.label }} <p v-if="props.formInput.isMandatory">*</p></label
	>
	<select
		v-if="props.formInput.acceptableType == acceptableTypes.PREDEFINED"
		:name="props.formInput.label"
		class="input-box"
		id="test"
	>
		<option v-for="(element, index) in props.formInput.selectableOptions">{{ element }}</option>
	</select>
	<input
		v-else
		:type="props.formInput.acceptableType"
		:pattern="getInputTypePattern(props.formInput.acceptableType)"
		class="input-box"
		@keydown="validateInput($event, props.formInput.acceptableType)"
	/>
</template>

<script setup lang="ts">
	import type {formInput} from "@/scripts/util/formInput";
	import {acceptableTypes} from "@/scripts/util/formInput";
	import {getInputTypePattern} from "@/scripts/util/pattern";
	const props = defineProps<{
		formInput: formInput;
	}>();

	function validateInput(event: any, inputType: acceptableTypes) {
		let key = event.keyCode;

		if (
			inputType == acceptableTypes.POSTCODE ||
			inputType == acceptableTypes.NUMBER ||
			inputType == acceptableTypes.PHONE
		) {
			if (
				!(
					(key >= 48 && key <= 57) ||
					key == 8 ||
					key == 46 ||
					key == 37 ||
					key == 39 ||
					key == 13 ||
					key == 9 ||
					key == 11
				)
			) {
				if (event.preventDefault) {
					event.preventDefault();
				}
				event.returnValue = false;
			}
		}
	}
</script>

<style lang="scss">
	@import "@/styles/components/inputField.scss";
</style>
