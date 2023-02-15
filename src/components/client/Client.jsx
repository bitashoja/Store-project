import React from 'react'
import './client.css'

const profiles = [
  { id: 1, cover: './image/ali.svg', name: 'Ali Shoja', job: 'UIUX designer' },
  {
    id: 2,
    cover: './image/profail1.svg',
    name: 'Hossein Bagherzadeh',
    job: 'product manager',
  },
  {
    id: 3,
    cover: './image/profail2.svg',
    name: 'Jason  Williams',
    job: 'Digital Camera Winner',
  },
  {
    id: 4,
    cover: './image/profail3.svg',
    name: 'Jason  Williams',
    job: 'Digital Camera Winner',
  },
  {
    id: 5,
    cover: './image/profail4.svg',
    name: 'Jason  Williams',
    job: 'Digital Camera Winner',
  },
  {
    id: 6,
    cover: './image/profail5.svg',
    name: 'Jason  Williams',
    job: 'Digital Camera Winner',
  },
]

export default function Client() {
  return (
    <div className="client">
      <div className="commentsProfile">
      <h3 className='comments'>Some of our client comments</h3>
      <p className='paraComments'>
        Team consists of professional and experienced consultants, technicians, 
        engineers, designers and solution architects who work with you to <br/> find  
        the best possible solution for your IT environment.
      </p>
      </div>
      {profiles.map((user) => (
        <div className="clientBox" key={user.id}>
          <div className="clientBoxProfile">
            <div className="clientBoxImg">
              <img src={user.cover} />
            </div>
            <div className="clientBoxName">
              <p className="profileName">{user.name}</p>
              <p className="job">{user.job}</p>
            </div>
          </div>
          <div>
            <p className="descPara">
              Most of the IT projects demand the deployment of their key
              developer’s onsite at the client’s location followed by their
              deployment at the offsho ....
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
