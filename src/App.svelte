<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import GeminiChat from './lib/GeminiChat.svelte';
  import OpenWithIDX from './lib/OpenWithIDX.svelte'

</script>

<main>
  <h1>Welcome to My Space!</h1>
  <div class="card">
    <OpenWithIDX />
  </div>

  <div class="card">
    <Counter />
  </div>

  <div class="card">
    <GeminiChat/>
  </div>
</main>

<style>
  main {
    width: 100%;
    padding: 24px;
    margin: 0 auto;
    border-radius: 20px;
  }
</style>