import React from "react";
import "./Template.css";

export default function Template({
  img,
  heading,
  header_img,
  text,
  button_text,
  style,
}) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 505;
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return width < breakpoint ? (
    <div className="template__mobile" style={style}>
      <div className="template__image">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="template__content">
        <img src={header_img} alt="" />
        <h1>{heading}</h1>
        <p>{text}</p>
        <div className="black_button">
          <button>{button_text}</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="template" style={style}>
      <div className="template__image">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="template__content">
        <img src={header_img} alt="" />
        <h1>{heading}</h1>
        <p>{text}</p>
        <div className="black_button">
          <button>{button_text}</button>
        </div>
      </div>
    </div>
  );
}
