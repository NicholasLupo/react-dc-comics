import CicleObject from "./CicleObject";
import DigitalComics from "../assets/img/buy-comics-digital-comics.png"
import Merchandise from "../assets/img/buy-comics-merchandise.png"
import ShopLocator from "../assets/img/buy-comics-shop-locator.png"
import Subscriptions from "../assets/img/buy-comics-subscriptions.png"
import PowerVisa from "../assets/img/buy-dc-power-visa.svg"

export default function AppMain() {

    const catalog = [

        {
            img: { DigitalComics },
            type: 'DIGITAL COMICS'
        },
        {
            img: { Merchandise },
            type: 'DC MERCHANDISE'
        },
        {
            img: { Subscriptions },
            type: 'SUBSCRIPTION'
        },
        {
            img: { ShopLocator },
            type: 'COMIC SHOP LOCATOR'
        },
        {
            img: { PowerVisa },
            type: 'DC POWER VISA'
        }

    ]


    return (

        <main>
            <section id="backOne">
                <div className="container">
                    <div id='upper' className="row">
                        <p className="text-white fw-bold fs-3"> --&#62; Content goes here &#60;-- </p>
                    </div>
                </div>
            </section>
            <section id="backTwo">
                <div className="container">
                    <div id='lower' className="row">
                        <CicleObject object={catalog} />
                    </div>
                </div>
            </section>
        </main >

    )

}