import React from 'react'
import './mobileApps.css'

export default function MobileApps() {
  return (
    <div className="mobileApps">
      <h3 className="mobileApp-title">Mobile Apps development</h3>
      <div className="mobileApp-img">
        <img
          src="./images/mobileApps.png"
          alt="mobileApp"
          className="mobileApp"
        />
      </div>
      <div className="mobileApp-text">
        <h3 className="mobileApp-title2">Mobile Apps development</h3>
        <span>
          In the digital age, most people have access to smartphones and spend
          between 2 and 7 hours on their phones. So this is a good opportunity
          to take advantage of this issue by developing an application for your
          business development. Mobile applications have become very widespread
          in recent years and are increasing every day. Ordering an app is like
          a long-term investment. The future market is the mobile phone market,
          and for this reason, the mobile application market can be a suitable
          platform for your business <br /> The technical team{' '}
          <span className="Beyond">
            Beyond <img src="./images/Subtract.svg" alt="Subtract" />{' '}
          </span>
          with up-to-date technical knowledge and proficient in various
          development languages such as BuildFire.js, Python, Java, JavaScript,
          Flutter, etc. can help you achieve your goal.
        </span>
        <div className="button-mobileApp">
          <img
            src="./images/buttonMobileApp.png"
            alt="images/buttonMobileApp"
            className="images/buttonMobileApp"
          />
        </div>
      </div>
    </div>
  )
}
