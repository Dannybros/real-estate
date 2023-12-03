import { useState } from 'react'
import Dropdown from './Dropdown'
import './Home.css'

function Home() {
  const statuses = ['All', 'Buy', 'Rent'];

  const [status, setStatus] = useState<string>('All');
  const [areas, setAreas] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [beds, setBeds] = useState<string[]>([]);

  const flat_areas=["ss", 'aa', 'dd'];
  const flat_types=["333", 'aeee', 'vvvv'];
  const flat_beds=['1', '2', '3', '4', '5'];

  return (
    <div className='home'>
      <section className='hero-element'>
        <div className='hero-overlay'></div>
        <div className='container hero-container'>
          <div className='hero-widget'>
            <h1 className='hero-title'>
              Discover your place to live
            </h1> 
            <p className='hero-subtitle'>
              Get started in few clicks
            </p>
            <div className='search-section'>
              <ul className='search-tabs'>
                {statuses.map((item, index) => (
                  <li className={status === item ? 'tab-active' : ''} key={index} onClick={()=>setStatus(item)}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className='search-form'>
                <div className="search-area search-field">
                  <Dropdown setSelection={setAreas} selection={areas} items={flat_areas} title="All Areas" multiSelect={true}/>
                </div>
                <div className="search-type search-field">
                  <Dropdown setSelection={setTypes} selection={types} items={flat_types} title="All Types" multiSelect={true}/>
                </div>
                <div className="search-bed search-field">
                  <Dropdown setSelection={setBeds} selection={beds} items={flat_beds} title="Bedrooms" />
                </div>
                <button className='search-field search-btn'>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='feature-section container'>
        <h1>Our Featured Exclusives</h1>
        <p>
          Searching for your ideal home or commercial property in the UAE shouldn't be a daunting experience. That's why we're here to assist you in finding the perfect property at the right price.
        </p>
      </section>
    </div>
  )
}

export default Home