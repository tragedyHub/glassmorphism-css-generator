import React from "react";
import styled from "styled-components"

const DisplayResultBlock = styled.div`
  background: url(${(props) => props.image}) no-repeat center center;
  width: 100%;
  height: 450px;
  border-radius: 0.3em;
  display: flex;
  @media screen and (max-width: 640px) {
    height: 800px;
  }
`;
const DisplayResultContent = styled.div`
  margin: auto auto;
  border-radius: 0.5em;
  height: auto;
  width: 70%;
  border: 1px solid #fff;
  backdrop-filter: blur(${(props) => props.blur}px)
    saturate(${(props) => props.saturation / 2}%);
  -webkit-backdrop-filter: blur(${(props) => props.blur}px)
    saturate(${(props) => props.saturation / 2}%);
  background-color: rgba(0, 0, 0, ${(props) => props.opacity / 100});
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  @media screen and (max-width: 640px) {
    height: 90%;
  }
`;

const ResultPreview = (props) => {
  return (
    <div className="result_card">
      <DisplayResultBlock image={props.imageUrl}>
        <DisplayResultContent
          blur={props.blurCounter}
          opacity={props.opacityCounter}
          saturation={props.saturationCounter}
          color={props.color}
        >
          <div className="result_content_row">
            <h1 className="result_content_title">Team members</h1>
          </div>
          <div className="result_content_team">
            <div className="result_content_people_card">
              <div className="card_logo logo1"></div>
              <div className="card_column">
                <h1 className="card_title">Chris Wood</h1>
                <div className="status">
                  <div className="circle status_online"></div>
                  <h1 className="status_text">Online</h1>
                </div>
              </div>
              <button className="btn">Chat</button>
            </div>
            <div className="result_content_people_card">
              <div className="card_logo logo2"></div>
              <div className="card_column">
                <h1 className="card_title">Jose Leos</h1>
                <div className="status">
                  <div className="circle status_buzy"></div>
                  <h1 className="status_text">Buzy</h1>
                </div>
              </div>
              <button className="btn">Chat</button>
            </div>
            <div className="result_content_people_card">
              <div className="card_logo logo3"></div>
              <div className="card_column">
                <h1 className="card_title">Jeny Green</h1>
                <div className="status">
                  <div className="circle status_offline"></div>
                  <h1 className="status_text">Offline</h1>
                </div>
              </div>
              <button className="btn">Chat</button>
            </div>
            <div className="result_content_people_card">
              <div className="card_logo logo4"></div>
              <div className="card_column">
                <h1 className="card_title">Neil Sims</h1>
                <div className="status">
                  <div className="circle status_online"></div>
                  <h1 className="status_text">Online</h1>
                </div>
              </div>
              <button className="btn">Chat</button>
            </div>
          </div>
        </DisplayResultContent>
      </DisplayResultBlock>
    </div>
  );
};

export default ResultPreview;
