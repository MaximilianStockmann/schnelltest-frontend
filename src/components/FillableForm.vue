<template>
	<div class="form-container">
		<div class="input-container" v-for="(element, index) in formInputs">
			<InputField :form-input="element" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import {formInput} from "@/scripts/util/formInput";
	import {acceptableTypes} from "@/scripts/util/formInput";
	import InputField from "./InputField.vue";

	const formInputs: formInput[] = [
		new formInput("Vorname", [acceptableTypes.STRING], true),
		new formInput("Nachname", [acceptableTypes.STRING], true),
		new formInput("Geschlecht", [acceptableTypes.PREDEFINED], true),
		new formInput("Geburtstag", [acceptableTypes.DATE], true),
		new formInput("E-Mail", [acceptableTypes.STRING], true),
		new formInput("Telefon", [acceptableTypes.NUMBER], true),
		new formInput("Passnummer", [acceptableTypes.STRING], false),
		new formInput("Test-Typ", [acceptableTypes.PREDEFINED], true),
		new formInput("Land", [acceptableTypes.PREDEFINED], true, {}),
		new formInput("Straße", [acceptableTypes.STRING], true),
		new formInput("Hausnummer", [acceptableTypes.NUMBER], true),
		new formInput("PLZ", [acceptableTypes.NUMBER], true),
		new formInput("Ort", [acceptableTypes.STRING], true),
	];
</script>

<style lang="scss">
	@import "@/styles/components/fillableForm.scss";
</style>
