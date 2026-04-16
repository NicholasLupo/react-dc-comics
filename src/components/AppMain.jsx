import CicleObject from "./CicleObject";
import comics from "../../comics"

export default function AppMain() {

    const catalog = [

        {
            img: '/img/buy-comics-digital-comics.png',
            type: 'DIGITAL COMICS'
        },
        {
            img: '/img/buy-comics-merchandise.png',
            type: 'DC MERCHANDISE'
        },
        {
            img: '/img/buy-comics-subscriptions.png',
            type: 'SUBSCRIPTION'
        },
        {
            img: '/img/buy-comics-shop-locator.png',
            type: 'COMIC SHOP LOCATOR'
        },
        {
            img: '/img/buy-dc-power-visa.svg',
            type: 'DC POWER VISA'
        }

    ]


    return (

        <main>
            <section className="jumbotron">
                <img src="/img/jumbotron.jpg" alt="" />
            </section>
            <section id="backOne">
                <div className="container">
                    <div id='upper' className="row">
                        <ul className='list-unstyled'>
                            {
                                comics.map((item, index) => (
                                    <li key={index} className="col-2">
                                        <img src={item.thumb} alt="" />
                                        <p className="text-white">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <button className="text-white p-3 fw-bold btn btn-primary rounded-0"> LOAD MORE </button>
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