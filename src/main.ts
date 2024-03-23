import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { Engine, DisplayMode, Loader } from "excalibur";
import { JsfxrResource } from "@excaliburjs/excalibur-jsfxr";
import { sounds } from "./sounds";
import { template } from "./template";
import { model } from "./peasyEvents";

await UI.create(document.body, model, template).attached;

const game = new Engine({
  width: 850, // the width of the canvas
  height: 600, // the height of the canvas
  canvasElementId: "cnv", // the DOM canvas element ID, if you are providing your own
  displayMode: DisplayMode.Fixed, // the display mode
});

let loader = new Loader();

export let sndPlugin = new JsfxrResource();
sndPlugin.init();
for (const sound in sounds) {
  sndPlugin.loadSoundConfig(sound, sounds[sound]);
  model.sounds.push(sound);
}

await game.start(loader);
