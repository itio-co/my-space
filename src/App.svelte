<script>
  import Counter from "./lib/Counter.svelte";
  import GeminiChat from "./lib/GeminiChat.svelte";
  import OpenWithIDX from "./lib/OpenWithIDX.svelte";

  import Button from "./stories/Button.svelte";
  import Header from "./stories/Header.svelte";
</script>

<main>
  <Header />
  
  <h1>Welcome to My Space!</h1>
  <div class="card">
    <OpenWithIDX></OpenWithIDX>
  </div>

  <div class="card">
    <Counter></Counter>
  </div>

  <div class="card">
    <GeminiChat></GeminiChat>
  </div>

  <Button primary label="Test StoryBook" />
<Button primary label="Test" />


</main>

<style>
  main {
    width: 100%;
    padding: 24px;
    margin: 0 auto;
    border-radius: 20px;
  }
</style>
