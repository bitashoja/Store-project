import React from 'react';
import Header from '../Header/header';
import './headerContainer.css';

export default function Headercontainer() {
  return (
    <div className="header-container">
        <Header />
        <div className="header-bottom">
          <div className="header-bottom-text">
            <div>
              <h3>
                Software <br />
                Development
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Voluptatem quo cum ad, culpa accusantium incidunt voluptates{' '}
                <br />
                quae, vitae, ab ullam sequi iusto facere.
              </p>
            </div>
            <div className="img-button">
              <img src="./image/Frame 9725.svg" />

              <img src="./image/Frame 9725 (1).svg" />
            </div>
          </div>
          <div className="header-bottom-img">
            <img src="./image/labtop.svg" />
          </div>
        </div>
      </div>
  )
}
