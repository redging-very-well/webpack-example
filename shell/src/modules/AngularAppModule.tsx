import { useEffect } from "react";
import { mount } from "mfangular/app";

const AngularAppModule = () => {
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="remote-module">
      <div className="app-root"></div>
    </div>
  );
};

export default AngularAppModule;
