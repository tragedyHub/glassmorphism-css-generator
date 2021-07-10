import React, { useState } from "react";
import styled from "styled-components";
import CodeResult from "./components/HelpRow/CodeResult/CodeResult";
import HelpRow from "./components/HelpRow/HelpRow";
import ResultPreview from "./components/ResultPreview/ResultPreview";

const App = () => {
  const imageUrlPlaceholder =
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100";

  const [blurCounter, setBlurCounter] = useState(0);
  const [opacityCounter, setOpacityCounter] = useState(100);
  const [saturationCounter, setSaturationCounter] = useState(200);
  const [imageUrl, setImageUrl] = useState(imageUrlPlaceholder);

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
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        imageUrlPlaceholder={imageUrlPlaceholder}
      />
      <section className="result_section">
        <div className="container">
          <div className="cont">
            <ResultPreview imageUrl={imageUrl} blurCounter={blurCounter} opacityCounter={opacityCounter} saturationCounter={saturationCounter}/>
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
