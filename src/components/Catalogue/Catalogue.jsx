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
        <SubHeading img={img1} title="Trickle Creek ranch"/>
        <SubHeading img={img1} title="Trickle Creek ranch"/>
        <SubHeading img={img1} title="Trickle Creek ranch"/>
        <SubHeading img={img1} title="Trickle Creek ranch"/>
        <SubHeading img={img1} title="Trickle Creek ranch"/>
        <SubHeading img={img1} title="Trickle Creek ranch"/>
        <SubHeading img={img1} title="Trickle Creek ranch"/>
        <SubHeading img={img1} title="Trickle Creek ranch"/>
      </div>
    </div>
  )
}

export default Catalogue