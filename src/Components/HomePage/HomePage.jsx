import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import PostCaseSection from './PostCase/PostCase'
import BidCase from './BidCase/BidCase'
import WhyChooseJuriph from './WhyChooseJuriph/WhyChooseJuriph'
import EasySteps from './EasySteps/EasySteps'
import HowitWorks from './HowitWorks/HowitWorks'
import Testimonial from './Testimonial/Testimonial'
import WhatsNew from './WhatsNew/WhatsNew'

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <PostCaseSection/>
      <BidCase/>
      <WhyChooseJuriph/>
      <EasySteps/>
      <HowitWorks/>
      <Testimonial/>
      <WhatsNew/>
      
    </div>
  )
}
