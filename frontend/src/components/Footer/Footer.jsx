import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__item footer__item-left">
                    <p>© КАНАВТО, 2023</p>
                </div>

                <div className="footer__item footer__item-right">
                    <p>Информация о технических характеристиках, составе комплектаций, цветовой гамме и стоимости автомобилей, а также действующих акциях, сроках и условиях их проведения, указанных на сайте www.КАНАВТО.ru, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями пунктом 2 статьи 437 Гражданского кодекса Российской Федерации. Для получения подробной информации обращайтесь к специалистам нашей компании.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;