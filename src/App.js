import React, { useState } from "react";
import CodeResult from "./components/CodeResult/CodeResult";
import HelpRow from "./components/HelpRow/HelpRow";
import ResultPreview from "./components/ResultPreview/ResultPreview";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const App = () => {
  const imageUrlPlaceholder =
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100";

  const [blurCounter, setBlurCounter] = useState(0);
  const [opacityCounter, setOpacityCounter] = useState(100);
  const [saturationCounter, setSaturationCounter] = useState(200);
  const [imageUrl, setImageUrl] = useState(imageUrlPlaceholder);
  const [color, setColor] = useColor("RGB", 255,255,255);
  
  return (
    <div className="App">
      <HelpRow
        blurCounter={blurCounter}
        opacityCounter={opacityCounter}
        saturationCounter={saturationCounter}
        imageUrl={imageUrl}
        setBlurCounter={setBlurCounter}
        setOpacityCounter={setOpacityCounter}
        setSaturationCounter={setSaturationCounter}
        // imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        imageUrlPlaceholder={imageUrlPlaceholder}
        r={color.rgb.r}
        g={color.rgb.g}
        b={color.rgb.b}
        setColor={setColor}
      />
      <section className="result_section">
        <div className="container">
          <div className="cont">
            <ResultPreview
              imageUrl={imageUrl}
              blurCounter={blurCounter}
              opacityCounter={opacityCounter}
              saturationCounter={saturationCounter}
              color={color.rgb}
            />
            <CodeResult
              imageUrl={imageUrl}
              blurCounter={blurCounter}
              opacityCounter={opacityCounter}
              saturationCounter={saturationCounter}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
