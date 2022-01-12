import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import image1 from '../assets/linkedin.jpg'
import image2 from '../assets/Git.png'


const Carousell = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousell