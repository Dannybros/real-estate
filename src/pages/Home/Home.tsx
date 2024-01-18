import { useRef } from 'react'
import { Link } from 'react-router-dom';
import {newPropertySliderSettings} from './Initials'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import Dropdown from '../../components/Dropdown/Dropdown'
import Card from '../../components/Card/Card';
import Land from '../../components/Card/Land';
import Province from '../../components/Province/Province';
import './Home.css'
import { useAppContext } from '../../context/AppContext';

function Home() {

  const sliderRef = useRef<Slider>(null);
  const {updateFilters, filters, map, propertyTypes, propertyStatus} = useAppContext();

  const search_provinces: string[] = Object.keys(map);
  const search_cities: string[] = (filters.provinces=== null
    ? Object.values(map)
    : map[filters.provinces]
    ).flat();
  // const search_cities: string[] = (filters.provinces.length === 0
  //   ? Object.values(map)
  //   : filters.provinces.map((province) => map[province])
  //   ).flat();

  const sliderNextClick = ()=>{
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }

  const sliderPreviousClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const updateSearchQuery = (event: React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    const inputValue = event.target.value;
    updateFilters({search:inputValue})
  }

  return (
    <div className='home'>
      <section className='hero-element'>
        <div className='hero-overlay'></div>
        <div className='container hero-container'>
          <div className='hero-widget'>
            <h1 className='hero-title font-header'>
              Find Your Dream Properties in Lao PDR 
              <br className='text-breaker'/>
               Via Zion Real Esate Agency
            </h1>
            <div className='search-section'>
              <ul className='search-tabs'>
                {propertyStatus.map((item, index) => (
                  <li 
                    className={filters.status === item ? 'tab-active' : ''} 
                    onClick={()=>updateFilters({status:item})} key={index} 
                  > {item} </li>
                ))}
              </ul>
              <div className='search-form'>
                <div className='search-fields-box'>
                  <div className="search-field">
                    <Dropdown setSelection={updateFilters} selection={filters.provinces} items={search_provinces} filterKey="provinces"/>
                  </div>
                  <div className="search-field">
                    <Dropdown setSelection={updateFilters} selection={filters.areas} items={search_cities} filterKey="areas" multiSelect={true}/>
                  </div>
                  <div className="search-field">
                    <Dropdown setSelection={updateFilters} selection={filters.properties} items={propertyTypes} filterKey="properties" multiSelect={true}/>
                  </div>
                  <div className='search-field'>
                    <input type="text" className='search-input dd-selected font-default' 
                      onChange={updateSearchQuery} placeholder='Search Property ID / Name'
                    />   
                  </div>
                </div>
                <div  className='search-btn-box font-small'>
                  <button className='search-btn'>
                    Search
                  </button>
                  <button className='search-btn cancel'>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='feature-section section-padding'>
        <div className='container'>
          <h1 className='font-subheader'>Our Featured Exclusives</h1>
          <p>
            Searching for your ideal home or commercial property in the UAE shouldn't be a daunting experience. That's why we're here to assist you in finding the perfect property at the right price.
          </p>
          <div className='feature-card-wrapper'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </section>
      <section className="new-section section-padding">
        <div className='container'>
          <div className='new-section-header'>
            <h1 className='font-subheader'>New to Market</h1>
            <div className='slider-btn-box'>
              <span className='slider-btn' onClick={sliderPreviousClick}>
                <FaChevronLeft/>
              </span>
              <span className='slider-btn' onClick={sliderNextClick}>
                <FaChevronRight/>
              </span>
            </div>
          </div>
          <div className='slider-wrapper'>
            <Slider ref={sliderRef} {...newPropertySliderSettings}>
              {Array.from({ length: 8 }).map((_, i)=>(
                <div className='new-property-item' key={i}>
                  <Card footer={false} btn={false}/>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="land-section section-padding">
        <div className='container'>
          <h1>Our Exclusive Villas</h1>
          <div className='land-container'>
            {Array.from({length: 7}).map((_, i)=>(
              <Land key={i} imgUrl={`https://picsum.photos/id/${10+i}/800/500`}/>
            ))}
          </div>
        </div>
      </section>
      <section className='home-banner'>
        <img src="https://static.rdc.moveaws.com/images/hero/hp-hero-mortgage-desktop-cube.avif" alt="" />
        <div className='banner-text'>
          <h1 className='font-header'>Wish to sell or lend your properties in Lao?</h1>
          <p className='font-title'>Unlock your property's potential – list your home for rent or sale on our premier real estate platform today!</p>
          <Link to=''>Contact Us</Link>
        </div>
      </section>
      <section className='home-banner reverse'>
        <img src="https://c4.wallpaperflare.com/wallpaper/150/385/134/trees-design-house-lawn-wallpaper-preview.jpg" alt="" />
        <div className='banner-text'>
          <h1 className='font-header'>Need to buy your perfect property?</h1>
          <p className='font-title'>
            Discover your dream home or investment opportunity! Explore our vast selection of premium villas and lands available
          </p>
          <Link to=''>Contact Us</Link>
        </div>
      </section>
      <section className='province-section container'>
        <div className='province-widget'>
          <div className='province-item'> 
            <Province
              img='https://sevenstonesdxb.com/wp-content/uploads/2023/02/R7tEL7cI-Downtown-Dubai-by-Emaar-Properties-3.jpg'
              title='Vientiane City'
              number={20}
            />
          </div>
          <div className='province-item'>
            <Province
              img='https://sevenstonesdxb.com/wp-content/uploads/2023/02/Dubai-Marina-2.webp'
              title='Luang Prabang'
              number={20}
            />
          </div>
        </div>
        <div className='province-widget reverse'>
          <div className='province-item'> 
            <Province
              img='https://sevenstonesdxb.com/wp-content/uploads/2023/02/R7tEL7cI-Downtown-Dubai-by-Emaar-Properties-3.jpg'
              title='Vientiane City'
              number={20}
            />
          </div>
          <div className='province-item'>
            <Province
              img='https://sevenstonesdxb.com/wp-content/uploads/2023/02/Dubai-Marina-2.webp'
              title='Luang Prabang'
              number={20}
            />
          </div>
        </div>
        <div className='province-widget'>
          <div className='province-item'> 
            <Province
              img='https://sevenstonesdxb.com/wp-content/uploads/2023/02/R7tEL7cI-Downtown-Dubai-by-Emaar-Properties-3.jpg'
              title='Vientiane City'
              number={20}
            />
          </div>
          <div className='province-item'>
            <Province
              img='https://sevenstonesdxb.com/wp-content/uploads/2023/02/Dubai-Marina-2.webp'
              title='Luang Prabang'
              number={20}
            />
          </div>
        </div>
      </section>
      <section className='service-section'></section>
    </div>
  )
}

export default Home