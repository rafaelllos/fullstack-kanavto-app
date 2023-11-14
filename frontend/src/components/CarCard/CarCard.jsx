import "./CarCard.css";
import {Link} from "react-router-dom";

const CarCard = ({ props }) => {
    const { car_id, car_image, car_brand, car_model, car_body, car_transmission, car_transmissionType, car_litres, car_power, car_engineType, car_price } = props

    return (
        <div className="car-card">
            <div className="car-card__container">
                <div className="car-card__image">
                    <img src={car_image} alt=""/>
                </div>

                <div className="car-card__title">
                    <p>{car_brand + ' ' + car_model}</p>
                </div>

                <div className="car-card__description">
                    <p><span>Кузов</span>: {car_body}</p>
                    <p><span>Привод</span>: {car_transmission}</p>
                    <p><span>Коробка передач</span>: {car_transmissionType}</p>
                    <p><span>Мощность двигателя</span>: {car_litres} л, {car_power} л.с</p>
                    <p><span>Тип двигателя</span>: {car_engineType}</p>
                </div>

                <div className="car-card__price">
                    <p>{car_price} ₽</p>
                </div>

                <div className="car-card__button">
                    <Link to={`/booking/${car_id}`} state={{...props}}>Забронировать</Link>
                </div>
            </div>
        </div>
    )
}

export default CarCard;