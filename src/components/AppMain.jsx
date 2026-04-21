import CicleObject from "./CicleObject";
import comics from "../../comics"

export default function AppMain() {

    const catalog = [

        {
            img: '/img/buy-comics-digital-comics.png',
            nome: 'DIGITAL COMICS',
            link: '/digital-comics'
        },
        {
            img: '/img/buy-comics-merchandise.png',
            nome: 'DC MERCHANDISE',
            link: '/dc-merchandise'
        },
        {
            img: '/img/buy-comics-subscriptions.png',
            nome: 'SUBSCRIPTION',
            link: '/subscription'
        },
        {
            img: '/img/buy-comics-shop-locator.png',
            nome: 'COMIC SHOP LOCATOR',
            link: '/comic-shop'
        },
        {
            img: '/img/buy-dc-power-visa.svg',
            nome: 'DC POWER VISA',
            link: '/power-visa'
        }

    ]


    return (

        <main>
            <section className="jumbotron">
                <img src="/img/jumbotron.jpg" alt="" />
            </section>
            <section id="backOne">
                <div className="container">
                    <span className="text-white fw-bold fs-5"> CURRENT SERIES </span>
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
                        <button className="text-white mt-4 p-3 fw-bold btn rounded-0"> LOAD MORE </button>
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