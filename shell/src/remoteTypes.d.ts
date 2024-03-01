///<reference types="react" />

/**
 * This file defines the interfaces for the remote components that are being imported into the shell.
 */

declare module "mf1/app" {
  import { ComponentType } from "react";
  interface Props {}
  const MicrofrontendOne: ComponentType<Props>;
  export default MicrofrontendOne;
}

declare module "mf2/app" {
  import { ComponentType } from "react";
  interface Props {}
  const MicrofrontendTwo: ComponentType<Props>;
  export default MicrofrontendTwo;
}

declare module "mf3/app" {
  import { ComponentType } from "react";
  interface Props {
    onChange: (e: any) => void;
    // Other props...
  }
  const MicrofrontendThree: ComponentType<Props>;
  export default MicrofrontendThree;
}

declare module "mfangular/app" {
  // although this is an angular component, we need to treate it as a react component
  import { ComponentType } from "react";
  interface Props {}
  const MicrofrontendAngular: ComponentType<Props>;
  export default MicrofrontendAngular;
}
