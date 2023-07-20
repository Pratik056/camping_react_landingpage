import './catalogue.css';
import destination from '../../assets/destination.png';
import SubHeading from '../../container/Subheading';
import img1 from '../../assets/pexels-igor-cibulsky-8713324.jpg';

const Catalogue = () => {
  return (
    <div className='app__catalogue section__padding'>
      <div className="app__catalogue-headtext">
        <img src={destination} alt="" />
        <h1>Explore Destination <br />& Activities</h1>
      </div>

      <div className="app__catalogue-container">
        <SubHeading img={img1} title="Nagarkot"/>
        <SubHeading img={img1} title="Mustang"/>
        <SubHeading img={img1} title="Pokhara"/>
        <SubHeading img={img1} title="Dhampus village"/>
        <SubHeading img={img1} title="Begnas lake and Rupakot village"/>
        <SubHeading img={img1} title="Nirmal Pokhari Village"/>
        <SubHeading img={img1} title="Sikles Village"/>
        <SubHeading img={img1} title="Naudada"/>
      </div>
    </div>
  )
}

export default Catalogue