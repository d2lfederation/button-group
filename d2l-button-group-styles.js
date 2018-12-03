import '@polymer/polymer/polymer-legacy.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-button-group-styles">
	<template>
		<style>

			:host {
				display: block;
			}

			:host .d2l-button-group-container {
				/*align-items: stretch;*/
				display: flex;
				flex: 0 1 auto;
				flex-wrap: wrap;
			}

			:host .d2l-button-group-container ::slotted(d2l-button),
			:host .d2l-button-group-container ::slotted(d2l-button-subtle),
			:host .d2l-button-group-container ::slotted(d2l-button-icon),
			:host .d2l-button-group-container ::slotted(d2l-link),
			:host .d2l-button-group-container ::slotted(span),
			:host .d2l-button-group-container ::slotted(d2l-dropdown),
			:host .d2l-button-group-container ::slotted(d2l-dropdown-button),
			:host .d2l-button-group-container ::slotted(.d2l-button-group-custom-item)  {
				margin-right: 0.75rem;
			}

			/* using !important to force override.  ex. consumer has explicitly
			specified display. note: inline styles, and shadow-dom with consumer specified
			css will override this unless !important is specified */
			:host .d2l-button-group-container ::slotted([chomped]) {
				display: none !important;
			}

		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
