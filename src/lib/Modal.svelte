<script>
// @ts-nocheck
	export let showModal; // boolean
	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot class="slotbody"/>
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		<div class="footer">
			<button autofocus on:click={() => dialog.close()}>close modal</button>
		</div>
	</div>
</dialog>

<style>
	dialog {
		min-width: 40em;
		min-height: 30em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
	.footer{
		display: flex;
		flex-direction: column;
  		justify-content: flex-end; 
	}
	.slotbody {
		min-height: 70em;
		height: 800px;
	}
</style>
