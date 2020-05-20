import { WebView } from "https://deno.land/x/webview/mod.ts";

const contentType = "text/html";
const sharedOptions = {
  width: 600,
  height: 700,
  resizable: false,
  debug: true,
  frameless: false,
};

const webview1 = new WebView({
  title: "Deno-Sapper Timer App",
  url: "https://simple-timer.now.sh/",
  ...sharedOptions,
});

await webview1.run();
