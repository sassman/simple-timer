<script>
  import Timer from "../components/Timer.svelte";
</script>

<style>
  h1,
  div,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper Timer App</title>
</svelte:head>

<h1>Start your timer!</h1>

<div>
  <Timer />
</div>
