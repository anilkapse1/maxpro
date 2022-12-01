import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import Fullpage, { FullPageSections, FullpageSection,FullpageNavigation } from '@ap.cx/react-fullpage'
import { Stepcontext } from './context/Context'
import Steppercontrol from './Multistepper/Steppercontrol'
import Capital from './Riskprofile/Capital'


const Risk = () => {
    const sectionStyle={
        height:'100vh'
      }
    
    const {activeSteps} = useContext(Stepcontext); 

    const [correct, setCorrect] = useState(false);
    useEffect(()=>{
      if(activeSteps===7){
        setCorrect(true);
      }else{
        setCorrect(false);
      }
    },[activeSteps])


  return (
    <Fullpage>
      <FullpageNavigation className="pageNavigator">
        </FullpageNavigation>
      <FullPageSections>
      <FullpageSection style={sectionStyle}>
        <Steppercontrol/>
      </FullpageSection>
      {
        correct && (
          <FullpageSection style={sectionStyle}>
            <Capital/>
          </FullpageSection>
        )
      }
      <FullpageSection style={sectionStyle}>
        <Footer/>
      </FullpageSection>
    </FullPageSections>
  </Fullpage>
  )
}

export default Risk