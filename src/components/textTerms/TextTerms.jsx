import React from 'react'
import './textTerms.css'

export default function TextTerms() {
  return (
    <div className="textTerms">
      <div className="title-terms">
        <span className='title-terms-name'>Terms & Conditions</span> <br />
        <span className='date-terms-updated'>Last updated: 19 Jan, 2022</span>
      </div>
      <div className="text-terms-one">
        <span>
          We want you to <span className='text-Purple'>believe in yourself</span> , your beauty, your ability to boost
          your confidence. Others can see you without graphic filters. Your real
          and beautiful self.
        </span>
      </div>
      <div className="text-terms-two">
        <span>The purpose of this platform is to increase people's self-confidence
        without negative and bad comments, just by voting between one and ten.
        This platform includes different categories, to which more diverse
        competition will be added in the next eternities.</span>
      </div>
      <div className="text-terms-three">
        <span>You can participate in one or more competitions with the relevant
        subject of your photo only as a selfie. Of course with your own
        creativity, others rate your selfie and creativity, or just participate
        in rating your friends and loved ones and rate them from one to ten.</span>
      </div>
      <div className="text-terms-four">
        <span>At the end of each week, the app sponsor pays a prize to the selected
        winner. We hope you contribute to boosting self-confidence and
        connecting with your friends and family.</span>
      </div>
    </div>
  )
}
