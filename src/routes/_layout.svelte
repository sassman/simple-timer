<script>
  import { stores } from "@sapper/app";
  import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte";
  import Nav from "../components/Nav.svelte";

  const siteId = "UA-44055990-2";

  export let segment;
</script>

<style lang="scss" global>
  @import "../style/global.scss";
</style>

<GoogleAnalytics {stores} id={siteId} />

<Nav {segment} />

<main>
  <slot />
</main>
