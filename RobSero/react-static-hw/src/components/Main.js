import React from 'react'

function Main({ about,links,text }) {
  return (
    <main>
      <section className="section" id="hero">
        <h1 className="title">Coffee Assembly</h1>
      </section>

      <section className='section' id='gallery'>
        <div className='container'>
          <h2 className="title">Gallery</h2>
          <div className="columns">
            <div className="column is-one-third">
              <div className="image image-one"></div>
            </div>
            <div className="column is-one-third">
              <div className="image image-two"></div>
            </div>
            <div className="column is-one-third">
              <div className="image image-three"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="menus">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 content">
              <h2 className="title">Menu</h2>
              <p>{text[0]}</p>
              <p>{text[1]}</p>
              {links.map(menuType => {
                return (<a key={menuType}>{menuType}</a>)
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container"> 
          <div className="columns is-centered">
            <div className="column is-10 content">
              <h2 className="title">About</h2>
              {about.map((text,index) => {
                return (<p key={index}>{text}</p>)
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


export default Main