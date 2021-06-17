import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

// const unityContext = new UnityContext({
//   loaderUrl: "build/seeatrait15.loader.js",
//   dataUrl: "build/seeatrait15.data",
//   frameworkUrl: "build/seeatrait15.framework.js",
//   codeUrl: "build/seeatrait15.wasm",
// });

const unityContext = new UnityContext({
  loaderUrl: "build/seeatraitv1.3.loader.js",
  dataUrl: "build/seeatraitv1.3.data",
  frameworkUrl: "build/seeatraitv1.3.framework.js",
  codeUrl: "build/seeatraitv1.3.wasm",
});

function GameCanvas() {
  return <Unity unityContext={unityContext}
  style={{
    width: "1440px",
    height: "810px",
  }}
/>;
}
export default GameCanvas;



