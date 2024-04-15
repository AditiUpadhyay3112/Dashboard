import React from 'react'
import Banner from '../Banner/Banner'
import img from '../../Images/img1.png'
import img1 from '../../Images/img2.png'
import AboutCA from '../AboutCA'
import Features from '../Features'
import JobroleVideo from '../JobroleVideo'
import img2 from '../../Images/img3.png'
import img3 from '../../Images/img4.png'
import Starfeed from '../Starfeed'


const Home = () => {
  return (
   <>
   <div>
   <hr  className='' />
   <div>
      <Banner H1={'CAMPUS'} H2={'AMBASSADOR'} H3={'UPFLAIRS'} P1={'"A chance to unleash your creativity, spread infectious positivity, and leave an indelible mark on our campus community."'} img={img}/>
    </div>
    <div className=''>
      <AboutCA H1={'Who is a'} H2={'Campus'} H3={'Ambassador?'}  P1={'"A chance to unleash your creativity, spread infectious positivity, and leave an indelible mark on our campus community."'} img={img1} />
    </div>
    <div>
      <Features H1={'FEATURES FOR YOU'} P1={'"A chance to unleash your creativity, spread infectious positivity, and leave an indelible mark on our campus community."'}/>
    </div>

    <div>
      <JobroleVideo H1={'JOB ROLE'} P1={'"A chance to unleash your creativity, spread infectious positivity, and leave an indelible mark on our campus community."'} img={img2} img1={img3} />
    </div>
    <div>
      <Starfeed H1={"STAR OF THE FEED"}/>
    </div>
   </div>

   </>
  )
}

export default Home 