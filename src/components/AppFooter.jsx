import CicleList from "./CicleList"
import CicleObject from "./CicleObject"

export default function AppFooter() {

    const DCComics = [

        'Characters',
        'Comics',
        'Movies',
        'TV',
        'Games',
        'Videos',
        'News'

    ]

    const DC = [

        'Term Of Use',
        'Privacy policy (New)',
        'Ad Choices',
        'Advertising',
        'Jobs',
        'Subscriptions',
        'Talent Workshops',
        'CPSC Certificates',
        'Ratings',
        'Shop Help',
        'Contact Us'

    ]

    const Sites = [

        'DC',
        'MAD Magazine',
        'DC Kids',
        'DC Universe',
        'DC Power Visa'

    ]

    const Shop = [

        'Shop DC',
        'Shop DC Collectibles'

    ]

    const social = [

        {
            img: '/img/footer-facebook.png',
            nome: '',
            link: '/facebook'
        },
        {
            img: '/img/footer-twitter.png',
            nome: '',
            link: '/twitter'
        },
        {
            img: '/img/footer-youtube.png',
            nome: '',
            link: '/youtube'
        },
        {
            img: '/img/footer-pinterest.png',
            nome: '',
            link: '/pinterest'
        },
        {
            img: '/img/footer-periscope.png',
            nome: '',
            link: '/periscope'
        }


    ]


    return (

        <footer>
            <section id="backDraw">
                <div className="container">
                    <div id="links" className="col-6">
                        <div id="block">
                            <span className="fs-5">
                                DC COMICS
                            </span>
                            <CicleList array={DCComics} />
                            <span className="fs-5">
                                SHOP
                            </span>
                            <CicleList array={Shop} />
                        </div>
                        <div id="block">
                            <span className="fs-5">
                                DC
                            </span>
                            <CicleList array={DC} />
                        </div>
                        <div id="block">
                            <span className="fs-5">
                                SITES
                            </span>
                            <CicleList array={Sites} />
                        </div>
                    </div>
                    <div id="logo" className="col-6">
                        <img src='/img/dc-logo-bg.png' alt="" />
                    </div>
                </div>
            </section>
            <section id="backFinal">
                <div className="container">
                    <div id='socials' className="row">
                        <div className="btn col-5">
                            <button className="fw-bold text-white bg-transparent border border-2 border-primary p-3"> SIGN-UP NOW! </button>
                        </div>
                        <div id="social" className="col-5">
                            <span className="text-primary fw-bold fs-5"> FOLLOW US </span>
                            <CicleObject object={social} />
                        </div>
                    </div>
                </div>
            </section>
        </footer >

    )

}