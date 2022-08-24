<template>
	<div class="form-container">
		<div class="input-container" :class="element.label" v-for="(element, index) in formInputs">
			<InputField :form-input="element" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import {formInput} from "@/scripts/util/formInput";
	import {acceptableTypes} from "@/scripts/util/formInput";
	import InputField from "./InputField.vue";

	const formInputs: formInput[] = [
		new formInput("Vorname", acceptableTypes.STRING, true),
		new formInput("Nachname", acceptableTypes.STRING, true),
		new formInput("Geschlecht", acceptableTypes.PREDEFINED, true, {
			selectableOptions: ["männlich", "weiblich", "divers"],
		}),
		new formInput("Geburtstag", acceptableTypes.DATE, true),
		new formInput("E-Mail", acceptableTypes.STRING, true),
		new formInput("Telefon", acceptableTypes.PHONE, true),
		new formInput("Passnummer", acceptableTypes.STRING, false),
		new formInput("Test-Typ", acceptableTypes.PREDEFINED, true, {
			selectableOptions: ["Antigen Test", "PCR-Labor (79,75€)", "PCR-Labor (angeordnet, KV)"],
		}),
		new formInput("Land", acceptableTypes.PREDEFINED, true, {
			selectableOptions: ["Deutschland", "Österreich"],
		}),
		new formInput("Straße", acceptableTypes.STRING, true),
		new formInput("Hausnummer", acceptableTypes.NUMBER, true),
		new formInput("PLZ", acceptableTypes.POSTCODE, true),
		new formInput("Ort", acceptableTypes.STRING, true),
	];
</script>

<style lang="scss">
	@import "@/styles/components/fillableForm.scss";
</style>
