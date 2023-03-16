import React from 'react'
import './style.scss'
import { CgDetailsMore } from 'react-icons/cg'
import { GoHome } from 'react-icons/go'
import { BsBookmarkCheck } from 'react-icons/bs'
import { BsBorderAll } from 'react-icons/bs'
const About = () => {
  document.title = `TV-Pedia - About`


  return (
    <section className="about-section">

      <div className="box">
        <h1>Hello,</h1>
        <p className='message1'>
          My name is Faizan Farooq.
          <br />
          First of all thank you for shorlisting me to do this tv show information project.It was a very Fun Project.Learned a lot from it.
          <br />
        </p>
        <p className='message2'>
          <GoHome /> &nbsp;
          In The Home Page I have added 2 section's one is the hero section and other is the Tv Show section whose Data is being fetched from the link:
          <b>
            <u>
              "https://api.tvmaze.com/search/shows?q=all"
            </u>
          </b>
          .The link which was provided by you.

          From the API i am displaying the name,rating,image & genres and by clicking the button, summary and some other information can be seen as well.

          <br />
          <br />
          <CgDetailsMore /> &nbsp;
          In the Details Page of the individual TV Shows , i have displayed the details regarding the TV Show & to book the TV Show Slot i have provided a button which redirects to the book show page.
          <br />
          <br />

          <BsBookmarkCheck /> &nbsp;
          Then In the Booking Page there is a form which takes basic information of the user like:
          <b> Name</b>,<b>Email </b>& <b>Phone Number</b>.

          I have stored the User Info in the
          <b> <u> localStorage</u> </b>.
          Which can be seen when user submits the form, his/her Details are seen in the Card.
          <br />
          <br />

          <BsBorderAll /> &nbsp;
          There is Also a All Shows Page,which can be accessed by clicking in the navbar, in this page i am calling the API to display all the TV Shows.
          There Details can also be accessed by clicking the Details Button.
        </p>




      </div>
    </section>
  )
}

export default About