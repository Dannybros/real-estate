import { useState, useEffect } from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { FaWalking, FaCar, FaPhoneAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Detail.css'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

const surroundings = [
  {
    title:"Morning Market",
    desc1:"Thatlasao Morning Market",
    desc2:"2 mins walk to west",
    icon:"Walk"
  },
  {
    title:"Supermarket",
    desc1:"Xokthavy supermarket, CP Shop",
    desc2:"5 mins drive to East",
    icon:"Drive"
  },
  {
    title:"Park & Recreation",
    desc1:"Patuxay Park",
    desc2:"10 mins walk to west",
    icon:"Walk"
  },
  {
    title:"Library",
    desc1:"Helo Library",
    desc2:"15 mins drive to northwest",
    icon:"Drive"
  },
  {
    title:"Lake",
    desc1:"ThatLuang Lake Park",
    desc2:"20 mins drive to north",
    icon:"Drive"
  },
  {
    title:"City Center",
    desc1:"Vientiane Center Complex",
    desc2:"10 mins drive to South",
    icon:"Drive"
  }
]

const interiors = [
  {
    title:"BedRooms & Bathrooms",
    desc:[
      "2 Bedrooms",
      "2 Bathrooms",
      "Soaking Tub"
    ]
  },
  {
    title:"Living Room",
    desc:[
      "Gas Fireplace",
      "High Ceiling",
      "Celineg Fan",
      "Double Pane Windows"
    ]
  },
  {
    title:"Baseroom",
    desc:[
      "Wine room",
      "200 sq/m²",
      "Smoke Free Zone"
    ]
  },
  {
    title:"Kitchen",
    desc:[
      "Self-Cleaning Oven",
      "Microwave",
      "Dishwasher"
    ]
  },
  {
    title:"Laundry",
    desc:[
      "Laundry in unit",
      "Dryer",
      "Washer"
    ]
  },
  {
    title:"Outside",
    desc:[
      "Garden (can plant trees & crops)",
      "2 Parking Garage",
      "Swimming Pool"
    ]
  },
  {
    title:"Outside",
    desc:[
      "Garden (can plant trees & crops)",
      "2 Parking Garage",
      "Swimming Pool"
    ]
  },
  {
    title:"Outside",
    desc:[
      "Garden (can plant trees",
      "2 Parking Garage",
      "Swimming Pool",
      "Swimming Pool",
      "Swimming Pool",
    ]
  },
  {
    title:"Outside",
    desc:[
      "Garden (can plant trees & crops)",
      "2 Parking Garage",
      "Swimming Pool"
    ]
  },
]

function Detail() {

  const [shortenDetail, setShortenDetail] = useState<boolean>(false);
  const [columns, setColumns] = useState<number>(3);
  const [imgLength, setImgLength] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if(screenWidth <=500){
        setImgLength(1);
      }else if(screenWidth <=768){
        setImgLength(5);
      }else{
        setImgLength(7);
      }

      if (screenWidth <= 550) {
        setColumns(2);
      } else if (screenWidth < 320) {
        setColumns(1);
      } else {
        setColumns(3);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const interiorsLength = Math.ceil(interiors.length / columns);
  const newInteriors = [];

  for (let i = 0; i < interiors.length; i += interiorsLength) {
    const chunk = interiors.slice(i, i + interiorsLength);
    newInteriors.push(chunk);
  }

  const toggleDetail = ()=>{
    setShortenDetail(!shortenDetail);
  }

  return (
    <div className='detail-page'>
      <div className='container'>
        <div className='property-img-gallery'>
          {Array.from({length:imgLength}).map((_, i)=>(
            <div className='img-item' key={i}>
              <img src="https://photos.zillowstatic.com/fp/560ba9ed44f79663a696f52aa8662490-cc_ft_960.webp" alt=""/>
            </div>
          ))}
          <div className='btn-all-photo'>View all 17 photos</div>
          <div className='btn-vdo'>View 3D Tour</div>
        </div>
        <div className='property-info'>
          <div className='property-profile'>
            <div className='property-profile-status'>
              <CiHeart/>
            </div>
            <div className='property-profile-header'>
                <h1>$700,000 </h1>
                <p className='font-title'>
                  Denver, CO 80218 <br/>
                  Cheesman Park Neighborhood <br/>
                  Estimated payment $5,512/month
                </p>
                <p className='font-title property-profile-id'>
                  Status: <strong>Rent</strong> <br/>
                  Property ID: <strong>Zion-230184</strong>
                </p>
            </div>
            <div className='property-info-feature font-title'>
              <span><strong>2</strong> <br/> Beds</span>
              <span><strong>2</strong>  <br/> Baths</span>
              <span><strong>2</strong>  <br/> Parking</span>
              <span><strong>2000</strong>  <br/> Sqm²</span>
            </div>
            <div className='property-highlight-container'>
              <h2 className='property-highlight-title'>Highlights</h2>
              <ul className='property-highlights'>
                <li>Townhouse</li>
                <li>Built In 1995</li>
                <li>Living Room with Fireplace</li>
                <li>Wide Gardens </li>
                <li>Wood Flooring</li>
                <li>Baseroom for wine</li>
              </ul>
            </div>
            <div className='property-about'>
              <h2>About This property</h2>
              <p className='detail'
                style={{
                  display:shortenDetail? "-webkit-box" : "block"
                }}
              >
                Welcome to this extraordinary residence nestled in Denver’s prestigious Cheesman Park neighborhood. Prepare to be captivated by the allure of timeless elegance as you enter the full main floor of this exquisite 1892 built Denver Square home. Approximately 1,757 main floor square feet includes two bedrooms, two baths & a versatile sunroom/flex space. The charm of yesteryear is beautifully preserved with exquisite crown molding, intricate millwork & hardwood floors exuding warmth & character. High ceilings create an airy & spacious atmosphere, while large windows flood the home with natural light. You’ll love the gorgeous built-in cabinets including the full wall built-in hutch in the dining room, the extensive wainscoting & the cozy ambiance provided by gas fireplaces in both the living room & the sunroom. The kitchen & baths have been tastefully renovated, adding a touch of modern elegance to this charming residence. Recent updates include newer kitchen appliances, newly painted kitchen cabinets, new tile floors, primary bath closet built-ins, updated light fixtures, new interior paint, fully updated baths. You'll appreciate the convenience of in-unit laundry, the secure basement storage area, & the 2 deeded parking spaces with easy access to your personal entrance. Outside, your private yard awaits, offering space for a firepit, hot tub, garden & more.
              </p>
              <span className='detail-btn' onClick={toggleDetail}> 
                {shortenDetail?
                  <> Show <FaChevronDown/></>
                  :
                  <> Hide <FaChevronUp/></>
                }
              </span>
              <p className='property-date'>
                Listed on : 2024 January 21
              </p>
            </div>
            <div className='property-map'>
              <h2>Map (Location)</h2>
              <iframe className="location-map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d948.783658138597!2d102.5789444!3d17.9724722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU4JzIwLjkiTiAxMDLCsDM0JzQ0LjIiRQ!5e0!3m2!1sen!2sla!4v1702266280334!5m2!1sen!2sla" loading="lazy" allowFullScreen></iframe>
            </div>
            <div className='property-features'>
              <h2>Features</h2>
              <div className='feature-item-box floor-map'>
                <div className='property-feature-title'>
                  Floor Plan
                </div>
                <img src="https://e7.pngegg.com/pngimages/647/669/png-clipart-house-plan-floor-plan-architecture-house-angle-building-thumbnail.png" alt="" />
              </div>
              <div className='feature-item-box interior'>
                <div className='property-feature-title'>
                  Property Details
                </div>
                <div className='property-interiors'>
                  {newInteriors.map((interiors, i)=>(
                    <div className='feature-items-list' key={i}>
                      {interiors.map((item, idx)=>(
                        <ul className='feature-item' key={idx+1}> 
                          <div className='title'>
                            {item.title}
                          </div>
                          {item.desc.map((list, index)=>(
                            <li key={index}>{list}</li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className='feature-item-box surrounding'>
                <div className='property-feature-title'>
                  Surroundings
                </div>
                <div className='property-surrounding'>
                  {surroundings.map((item, i)=>(
                    <div className='feature-item surrounding' key={i}>
                      <p className="title">
                        {item.title}
                      </p>
                      <p>
                        {item.desc1}
                      </p>
                      <p className="desc">
                        {item.icon==="Drive" && <FaCar/>}
                        {item.icon==="Walk" && <FaWalking/>}
                        {item.desc2}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='property-similar'>
              <h2>Similar Listings</h2>
              <div className='property-similiar-items'>
                <Card id={1} btn={false} footer={false}/>
                <Card id={1} btn={false} footer={false}/>
                <Card id={1} btn={false} footer={false}/>
              </div>
            </div>
          </div>
          <div className="property-contact-box">
            <button className='btn-request font-default'>
              Request a Tour
            </button>
            <div className='contact-container'>
              <Link to="/" className='btn-contact'>
                Contact us
              </Link>
              <p>
                <span>(856) 20 9559 5515</span>
              </p>
              <p>
                <span>(856) 20 9559 5515</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageViewer/>
    </div>
  )
}

export default Detail