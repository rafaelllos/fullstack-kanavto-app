import "./CarCardPlace.css";
import CarCard from "../CarCard/CarCard";
import {useState, useEffect} from "react";
import axios from "axios";

const CarCardPlace = () => {
    const [carData, setCarData] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/car/getCars`)
            .then(response => {
                console.log(response.data)
                setCarData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="car-card-place">
            <div className="container car-card-place__container">
                {
                    carData?.map(item => {
                        return (
                            <CarCard props={item} key={item.car_id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CarCardPlace;