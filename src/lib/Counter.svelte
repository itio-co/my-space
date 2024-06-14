<script lang="ts">
  // Initialize a count variable to 0
  let count: number = 0 

  // Define a function to increment the count
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
