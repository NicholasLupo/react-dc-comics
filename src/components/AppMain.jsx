import CicleObject from "./CicleObject";

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