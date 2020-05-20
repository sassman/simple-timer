<style lang="scss">
  pre {
    background-color: #d1d1d1;
    font-family: monospace;
    padding: 0.5rem 1rem;
  }
</style>

<svelte:head>
  <title>About Simple Timer</title>
</svelte:head>

<h1>Simple Timer</h1>

<p>
  This is a simple showcase how
  <a href="https://svelte.dev/" target="_blank">#svelte</a>
  and
  <a href="https://sapper.svelte.dev/" target="_blank">#sapper</a>
  can be used to build a reactive timer app.
  <span>It uses typescript and sass/scss.</span>
</p>

<p>
  Additionally it demonstrate how to run a native (web)app with
  <a href="https://deno.land/" target="_blank">#deno</a>
</p>

<p>You can run this as deno app:</p>

<pre>
  deno run --unstable --allow-env --allow-read --allow-write --allow-plugin \
  --allow-net -A -r \
  https://raw.githubusercontent.com/sassman/simple-timer/master/native-deno.ts
</pre>

<p>
  <a href="https://github.com/sassman/simple-timer" target="_blank">
    You can find the whole code on github
    <svg
      class="octicon octicon-mark-github v-align-middle"
      height="24"
      viewBox="0 0 16 16"
      version="1.1"
      width="24"
      aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
        1.08.58 1.23.82.72 1.21 1.87.87
        2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
        0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18
        1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16
        1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65
        3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013
        8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  </a>
</p>
