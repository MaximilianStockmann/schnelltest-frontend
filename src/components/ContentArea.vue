<template>
	<div id="content-area">
		<h1 class="title">Anmeldung zur Testung</h1>
		<FillableForm />
		<div class="consent-menu-container">
			<AppConsentMenu class="corona-warn" containerLabel="Corona Warn App" />
			<AppConsentMenu class="luca-app" container-label="Luca App" />
		</div>
		<button @click="downloadConfirmation()">Click Me!</button>
		<div class="header">
			<!--Content before waves-->
			<div class="inner-header flex"></div>
			<!--Waves Container-->
			<div>
				<svg
					class="waves"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
					shape-rendering="auto"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
						/>
					</defs>
					<g class="parallax">
						<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.5)" />
						<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3)" />
						<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.1)" />
						<use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.7)" />
					</g>
				</svg>
			</div>
			<!--Waves end-->
		</div>
	</div>
	<div class="under"></div>
</template>

<script setup lang="ts">
	import FillableForm from "./FillableForm.vue";
	import AppConsentMenu from "./AppConsentMenu.vue";
	import {jsPDF} from "jspdf";

	function downloadConfirmation() {
		const doc = new jsPDF();

		doc.text("Hello world!", 10, 10);
		doc.save("test.pdf");
	}
</script>

<style lang="scss">
	@import "@/styles/components/contentArea.scss";
</style>
