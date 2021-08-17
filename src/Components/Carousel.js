import Flickity from 'react-flickity-component';
import Taco1 from '../images/Taco1.jpg';
import Taco2 from '../images/Taco2.jpg';
import Taco3 from '../images/Taco3.jpg';

const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
    >
      <div className='carousel-cell'>
        <img className='carousel-cell-img' src={Taco1} alt="Korean deepfried cauliflower taco" />
      </div>

      <div className='carousel-cell'>
        <img className='carousel-cell-img' src={Taco2} alt="Pork belly taco with crackling" />
      </div>

      <div className='carousel-cell'>
        <img className='carousel-cell-img' src={Taco3} alt="Beef taco with beetroot" />
      </div>
    </Flickity>
  )
}

export default Carousel
