import "./Bookingform.css";
import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useLocation} from "react-router-dom";

const Schema = Yup.object().shape({
    client_FIO: Yup.string()
        .required('Обязательно к заполнению'),
    client_phone: Yup.string()
        .min(11, "Введите номер телефона, 11 символов")
        .max(11, 'Введите номер телефона, 11 символов')
        .required('Обязательно к заполнению'),
    client_email: Yup.string()
        .email('Некорректный email-адрес')
        .required('Обязательно к заполнению'),
})

const Bookingform = () => {
    const location = useLocation()
    const { car_id, car_image, car_brand, car_model, car_body, car_transmission, car_transmissionType, car_litres, car_power, car_engineType, car_price } = location.state

    const [carData] = useState({
        car_id: car_id,
        client_FIO: '',
        client_phone: '',
        client_email: ''
    })

    return (
        <div className="bookingform">
            <div className="container bookingform__container">
                <div className="title bookingform__title">
                    Заявка на бронирование понравившегося автомобиля
                </div>

                <Formik
                    enableReinitialize={true}
                    initialValues={carData}
                    validationSchema={Schema}
                    onSubmit={
                        async (values) => {
                            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/car/postCarBooking`, values)
                                .then(response => {
                                    console.log(response.data)
                                    alert(response.data)
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                        }
                    }
                >
                    <Form>
                        <div className="bookingform__item">
                            <Field type="text" name="client_FIO" placeholder="Введите ФИО" />
                            <p><ErrorMessage name="client_FIO" /></p>
                        </div>
                        <div className="bookingform__item">
                            <Field type="text" name="client_phone" placeholder="Введите телефон" />
                            <p><ErrorMessage name="client_phone" /></p>
                        </div>
                        <div className="bookingform__item">
                            <Field type="text" name="client_email" placeholder="Введите почту" />
                            <p><ErrorMessage name="client_email" /></p>
                        </div>

                        <button type="submit" className="bookingform__button">Забронировать</button>
                    </Form>
                </Formik>

            </div>
        </div>
    )
}

export default Bookingform;