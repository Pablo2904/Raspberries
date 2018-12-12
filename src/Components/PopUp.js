import React from 'react';

export default function PopUp(props) {
  return (
    <div className="outerPop">
      <div className="popUp">
        <form className="flex">
          <span>Are you a Raspberry Knight?</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={props.handleInput}
            value={props.app.email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={props.handleInput}
            value={props.app.password}
          />
          <button type="submit" onClick={props.submitToApi}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
