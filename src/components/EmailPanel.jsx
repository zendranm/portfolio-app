import React from "react"
import "../styles/EmailPanel.scss"

const EmailPanel = () => {
  return (
    <div className="EmailPanel">
      <div className="inputFields">
        <form name="contact" action="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" id="name" name="name" placeholder="Name" />
          <br />
          <input type="email" id="email" name="email" placeholder="Email" />
          <br />
          <textarea id="message" name="message" placeholder="Message" />
          <br />
          <input type="submit" id="submit" name="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default EmailPanel
