import React from "react";

const CodeResult = (props) => {
  return (
    <div className="code_result">
      <h1 className="code_result_title">CSS</h1>
      <div className="code_result_content">
        <div className="code_row">
          <span className="selector">body</span>
          <span className="bracket">{"{"}</span>
        </div>
        <div className="property_code_row">
          <span className="property">background-image:</span>
          <span className="property_cont">
            url(
            <span className="property_value">"{props.imageUrl}"</span>)
          </span>
        </div>
        <div className="property_code_row">
          <span className="property">
            background-position:
            <span className="property_cont">center</span>;
          </span>
        </div>
        <span className="bracket">{"}"}</span>
        <div className="code_row mt">
          <span className="selector">.card</span>
          <span className="bracket">{"{"}</span>
        </div>
        <div className="property_code_row">
          <span className="property">backdrop-filter:</span>
          <span className="property_cont">
            blur(
            <span className="property_value">{props.blurCounter}px</span>)
          </span>
          <span className="property_cont">
            saturate(
            <span className="property_value">{props.saturationCounter}%</span>)
          </span>
          ;
        </div>
        <div className="property_code_row">
          <span className="property">-webkit-backdrop-filter:</span>
          <span className="property_cont">
            blur(
            <span className="property_value">{props.blurCounter}px</span>)
          </span>
          <span className="property_cont">
            saturate(
            <span className="property_value">{props.saturationCounter}%</span>)
          </span>
          ;
        </div>
        <div className="property_code_row">
          <span className="property">background-color:</span>
          <span className="property_cont">
            rgba(
            <span className="property_value">
              0, 0, 0, {props.opacityCounter / 100}
            </span>
            )
          </span>
          ;
        </div>
        <div className="property_code_row">
          <span className="property">border-radius:</span>
          <span className="property_cont">
            <span className="property_value green">12px</span>
          </span>
          ;
        </div>
        <div className="property_code_row">
          <span className="property">border:</span>
          <span className="property_cont green">1px</span>
          <span className="property_cont white">solid</span>
          <span className="property_cont">
            rgba(
            <span className="property_value">255, 255, 255, 0.125</span>)
          </span>
          ;
        </div>
        <span className="bracket">{"}"}</span>
      </div>
    </div>
  );
};

export default CodeResult;
