<script>
  import Timer from "../components/Timer.svelte";
</script>

<style>
  h1,
  div {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<svelte:head>
  <title>Simple Timer</title>
  <meta
    name="description"
    content="simple timer showcase, made with svelte and sapper to illustrate a
    deno native app" />
</svelte:head>

<h1>Start your timer!</h1>

<div>
  <Timer />
</div>
