import React from "react";
import "styles/EmailPanel.scss";

const EmailPanel = () => {
  return (
    <div className="EmailPanel">
      <div className="inputFields">
        <form>
          <input type="text" id="name" name="name" />
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <textarea id="message" name="message" />
        </form>
      </div>
    </div>
  );
};

export default EmailPanel;
