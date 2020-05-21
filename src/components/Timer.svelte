<script lang="typescript">
  let s = 0;
  let m = 0;
  let active = false;
  let timer: number;

  function setActive(a: boolean) {
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

<style lang="scss">
  @import "../style/responsive.scss";

  div,
  span {
    font-size: 6rem;
  }
  span {
    font-family: monospace;
  }
  button {
    text-transform: uppercase;
    font-size: 2.6rem;
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
  @include media("<=sm") {
    button {
      font-size: 1.6rem;
      width: fit-content;
    }
    div,
    span {
      font-size: 3.5rem;
    }
  }
  @include media(">sm", "<=md") {
    button {
      font-size: 1.8rem;
      width: 8rem;
    }
    div,
    span {
      font-size: 4rem;
    }
  }

  @include media(">md", "<=lg") {
    button {
      font-size: 2rem;
      width: 10rem;
    }
    div,
    span {
      font-size: 5rem;
    }
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
