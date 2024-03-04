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
  export interface MountOptions {
    // Define options based on the actual usage
    // Example:
    element: HTMLElement;
    props?: Record<string, any>;
  }

  export function mount(options?: MountOptions): void;
}
