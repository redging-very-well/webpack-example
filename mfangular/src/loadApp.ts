import "zone.js";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppModule } from "./app.module";
import { StandaloneComponent } from "./app/standalone/standalone.component";

const mount = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};

const mountStandalone = () => {
  bootstrapApplication(StandaloneComponent);
};

export { mount, mountStandalone };
