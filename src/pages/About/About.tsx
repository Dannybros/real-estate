import { FaRegHandshake } from "react-icons/fa";
import './About.css'
import wechat from '../../assest/wechat.jpg'
import whatsapp from '../../assest/whatsapp.jpg'

const services=[
    {
        title:"Agency & Brokerage Services",
        desc:"Seven Stones Real Estate offers Agency and Brokerage services from landlords and occupiers, institutional or corporate investors, and developers to local or central government authorities.",
        icon:""
    },
    {
        title:"Financial Reporting",
        desc:"Such interactive media is then promoted via our marketing channels; ranging from Google AdWords, Social Media, “smartly reached” newsletters, and our prominent online platform on all trusted portals in the region.",
        icon:""
    },
    {
        title:"Valuation & Advisory Services",
        desc:"Our Valuation professionals are widely recognized for providing the most sophisticated advice on the current and projected value of the real estate and real estate-related investments.",
        icon:""
    },
    {
        title:"Agency & Brokerage Services",
        desc:"Seven Stones Real Estate offers Agency and Brokerage services from landlords and occupiers, institutional or corporate investors, and developers to local or central government authorities.",
        icon:""
    },
    {
        title:"Financial Reporting",
        desc:"Such interactive media is then promoted via our marketing channels; ranging from Google AdWords, Social Media, “smartly reached” newsletters, and our prominent online platform on all trusted portals in the region.",
        icon:""
    },
    {
        title:"Valuation & Advisory Services",
        desc:"Our Valuation professionals are widely recognized for providing the most sophisticated advice on the current and projected value of the real estate and real estate-related investments.",
        icon:""
    }
]

function About() {
  return (
    <div className='about-page'>
        <div className='about-hero'>
            <h1>About us</h1>
        </div>
        <div className='about-widget container'>
            {services.map((item, i)=>(
                <div className='service-item' key={i}>
                    <div className='service-icon font-header'>
                        <FaRegHandshake/>
                    </div>
                    <div className='service-text font-title'>
                        <p><strong>{item.title}</strong></p>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='about-intro'>
            <div className='container'>
                <h1>About Company</h1>
                <p className='font-title'>Seven Stones Real Estate was founded by a highly experienced group of realtors in Dubai specializing in all facets of the real estate business. Combined with over 20 years of experience, knowledge of the Dubai market, and superior negotiating training; Seven Stones Real Estate is the perfect choice for representing you in all your real estate transactions. We are an organized team that is dedicated to providing the highest quality of service using our understanding of each individual area as well as our clientele needs. Our main focus is the customer journey in day-to-day management and our services are tailored to each client. We dedicate our special attention to unique needs and requirements to help hundreds of clients realize their homeownership goals, business setup, and return on investments.</p>
            </div>
        </div>
        <div className='about-contact'>
            <div className='contact-info'>
                <h1>Contact us with </h1>
                <h2>sdld@gmail.com</h2>
                <h2>(856) 20338383839</h2>
                <div className='divider'/>
                <img src={wechat} alt="" />
                <img src={whatsapp} alt="" />
            </div>
            <div className='contact-bg'>
                <img src="https://nodes3cdn.hotpads.com/rental-growth-web/1718/media/houseWithMoreHills.9f8bfe86.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About