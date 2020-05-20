<script>
  let s = 0;
  let m = 0;
  let active = false;
  let timer;

  function setActive(a) {
    active = a;
    if (!active) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        if (s == 59) {
          s = 0;
          m += 1;
        } else {
          s += 1;
        }
      }, 1000);
    }
  }
</script>

<style>
  div,
  span {
    font-size: 6rem;
  }
  span {
    font-family: monospace;
  }
  button {
    text-transform: uppercase;
    font-size: 3rem;
    padding: 0.5rem 1rem;
    width: 12rem;
    border: gray 1px solid;
    border-radius: 2px;
    background-color: #c8e6c9;
    color: #111111;
    cursor: pointer;
  }
  button:hover {
    background-color: #97b498;
  }
</style>

<button on:click={() => setActive(!active)}>
  {!active ? 'Start' : 'Stop'}
</button>

<div>
  <span>{m.toString().padStart(2, 0)}</span>
  :
  <span>{s.toString().padStart(2, 0)}</span>
</div>
