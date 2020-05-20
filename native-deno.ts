import { WebView } from "https://deno.land/x/webview/mod.ts";

const sharedOptions = {
  width: 800,
  height: 700,
  resizable: false,
  debug: true,
  frameless: false,
};

const webview = new WebView({
  title: "Simple Timer",
  url: "https://simple-timer.now.sh/",
  ...sharedOptions,
});

await webview.run();
