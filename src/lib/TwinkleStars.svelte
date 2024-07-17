<script>
    // Define the number of stars you want
    let stars = Array.from({ length: 100 }); // Example: 100 stars
  </script>
  
  <style>
    .twinkle-stars {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1; /* Ensures it stays behind other content */
      background: black; /* Adjust background color as needed */
    }
  
    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      animation: twinkle 2s infinite ease-in-out;
    }
  
    /* Randomly generate the position of each star */
    :global(.star):nth-child(odd) { animation-delay: -1s; }
    :global(.star):nth-child(even) { animation-delay: -2s; }
  
    @keyframes twinkle {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  </style>
  
  <div class="twinkle-stars">
    {#each stars as _, i}
      <div class="star" style="top: {Math.random() * 100}%; left: {Math.random() * 100}%"></div>
    {/each}
  </div>