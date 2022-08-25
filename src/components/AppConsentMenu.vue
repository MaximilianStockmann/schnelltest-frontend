<template>
	<div class="app-consent-menu">
		<div class="consent-title-container">
			<p>{{ props.containerLabel }}</p>
			<button @click="toggleConsentForm()">anzeigen</button>
		</div>
		<div class="consent-form" v-if="coronaAppCond">
			<label
				><input type="radio" :name="props.containerLabel" value="1" />Keine Nutzung</label
			>
			<label
				><input type="radio" :name="props.containerLabel" value="2" />Einwilligung zur
				pseudonymisierten Übermittlung (nicht-namentliche Anzeige) Hiermit erkläre ich mein
				Einverständnis zum Übermitteln meines Testergebnisses und meines pseudonymen Codes
				an das Serversystem des RKI, damit ich mein Testergebnis mit der Corona-Warn-App
				abrufen kann. Das Testergebnis in der App kann hierbei nicht als namentlicher
				Testnachweis verwendet werden. Die Datenschutzhinweise habe ich zur Kenntnis
				genommen und bin damit einverstanden.
			</label>
			<label
				><input type="radio" :name="props.containerLabel" value="3" />
				Einwilligung zur personalisierten Übermittlung (namentlicher Testnachweis) Hiermit
				erkläre ich mein Einverständnis zum Übermitteln des Testergebnisses und meines
				pseudonymen Codes an das Serversystem des RKI, damit ich mein Testergebnis mit der
				Corona-Warn-App abrufen kann. Ich willige außerdem in die Übermittlung meines Namens
				und Geburtsdatums an die App ein, damit mein Testergebnis in der App als
				namentlicher Testnachweis angezeigt werden kann. Die Datenschutzhinweise habe ich
				zur Kenntnis genommen und bin damit einverstanden.
			</label>
		</div>
		<div class="consent-form" v-if="lucaAppCond">
			<label
				><input type="checkbox" /> Einwilligung zur pseudonymisierten Übermittlung
				(nicht-namentliche Anzeige)<br />Hiermit erkläre ich mein Einverständnis zum
				Übermitteln des Testergebnisses an die LUCA-App.
			</label>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {ref} from "vue";
	const props = defineProps<{
		containerLabel: string;
	}>();

	let isShownConsentForm = ref(false);

	let coronaAppCond = ref(false);
	let lucaAppCond = ref(false);

	function toggleConsentForm(): void {
		isShownConsentForm.value = !isShownConsentForm.value;
		coronaAppCond.value = isShownConsentForm.value && props.containerLabel == "Corona Warn App";
		lucaAppCond.value = isShownConsentForm.value && props.containerLabel == "Luca App";
	}
</script>

<style lang="scss">
	@import "@/styles/components/appConsentMenu.scss";
</style>
