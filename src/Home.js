import React from 'react'
import Fullpage, { FullPageSections, FullpageSection,FullpageNavigation } from '@ap.cx/react-fullpage'
import Hero from './Hero'
import Howitwork from './Landingpage/Howitwork'
import Pricing from './Landingpage/Pricing'
import Footer from './Footer'
import Countdown from './Landingpage/Countdown'


const Home = () => {
  const sectionStyle={
    height:'100vh'
  }
 

  return (
        <Fullpage>
          <FullpageNavigation className="pageNavigator">
          </FullpageNavigation>
          <FullPageSections>
              <FullpageSection style={sectionStyle}>
                <Hero/>
              </FullpageSection>
              <FullpageSection style={sectionStyle}>
                <Howitwork/>
              </FullpageSection>
              <FullpageSection style={sectionStyle}>
                <Countdown/>
              </FullpageSection>
              <FullpageSection style={sectionStyle}>
                <Pricing/>
              </FullpageSection>
              <FullpageSection style={sectionStyle}>
                <Footer/>
              </FullpageSection>
          </FullPageSections>
        </Fullpage>
  )
}

export default Home