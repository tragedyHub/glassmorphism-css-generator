import React, { useState } from "react";
import styled from "styled-components"

const RangeInput = styled.input``;

const HelpRow = props => {
  

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
            <h1 className="help_row_item_title">Blur value {props.blurCounter}</h1>
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
            <h1 className="help_row_item_title">Opacity {props.opacityCounter}</h1>
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
