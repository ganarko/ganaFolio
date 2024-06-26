import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <br/>
          <br/>
          <b><p className="talk-card-subtitle">{talkDetails.subtitle}</p></b>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Dating Quiz
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Buddy Quiz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
