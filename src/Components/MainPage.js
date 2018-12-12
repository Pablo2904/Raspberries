import React from 'react';
import raspberry from '../img/raspberry.png';

export default function MainPage(props) {
  return (
    <section>
      <div className="container flex center">
        <div className="flex centered">
          <img src={raspberry} alt="Raspberry Kingdom" />
          <div className="flex" onClick={props.showPopUp}>
            <a>enter the gates</a>
          </div>
        </div>
      </div>
    </section>
  );
}
