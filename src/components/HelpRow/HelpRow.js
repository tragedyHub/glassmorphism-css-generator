import React, { useState } from "react";
import styled from "styled-components";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const RangeInput = styled.input``;
const CardColorPreview = styled.div`
  // background: ${props => props.bgColor};
  // background: ${props => props.bgColor};
  background-color: rgb(${props => props.r}, ${props => props.g}, ${props => props.b});
  border: 4px solid #374251;
  height: 1em;
  border-radius: 1em;
`;

const HelpRow = (props) => {
  const [color, setColor] = useColor("hex", "#121212");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div className="help_row">
      <div className="container">
        <div className="cont">
          <div className="help_row_item">
            <h1 className="help_row_item_title">Background image URL</h1>
            <input
              type="text"
              className="help_row_item_input"
              placeholder="Image URL"
              value={props.imageUrl}
              onChange={(e) => props.setImageUrl(e.target.value)}
            />
          </div>
          <div className="help_row_item">
            <h1 className="help_row_item_title">Card color</h1>
            <CardColorPreview r={props.r} g={props.g} b={props.b} onClick={() => setShowColorPicker(!showColorPicker)}/>
            {showColorPicker ? (
              <ColorPicker
                width={456}
                height={228}
                color={color}
                onChange={setColor}
                hideHSV
                dark
              />
            ) : null}
          </div>
          <div className="help_row_item">
            <h1 className="help_row_item_title">
              Blur value {props.blurCounter}
            </h1>
            <RangeInput
              type="range"
              className="range"
              min="0"
              max="25"
              value={props.blurCounter}
              onChange={(e) => props.setBlurCounter(e.target.value)}
            />
          </div>
          <div className="help_row_item">
            <h1 className="help_row_item_title">
              Opacity {props.opacityCounter}
            </h1>
            <RangeInput
              type="range"
              className="range"
              min="0"
              max="100"
              value={props.opacityCounter}
              onChange={(e) => props.setOpacityCounter(e.target.value)}
            />
          </div>
          <div className="help_row_item">
            <h1 className="help_row_item_title">
              Saturation {props.saturationCounter}
            </h1>
            <RangeInput
              type="range"
              className="range"
              min="0"
              max="200"
              value={props.saturationCounter}
              onChange={(e) => props.setSaturationCounter(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpRow;
