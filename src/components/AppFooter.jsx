import CicleObject from "./CicleObject"

export default function AppFooter() {

    const DCComics = [

        {
            nome: 'Characters',
            link: '/characters'
        },
        {
            nome: 'Comics',
            link: '/comics'
        },
        {
            nome: 'Movies',
            link: '/movies'
        },
        {
            nome: 'TV',
            link: '/tv'
        },
        {
            nome: 'Games',
            link: '/games'
        },
        {
            nome: 'Videos',
            link: '/videos'
        },
        {
            nome: 'News',
            link: '/news'
        }

    ]

    const DC = [

        {
            nome: 'Term Of Use',
            link: '/term-of-use'
        },
        {
            nome: 'Privacy policy (New)',
            link: '/privacy'
        },
        {
            nome: 'Ad Choices',
            link: '/choices'
        },
        {
            nome: 'Advertising',
            link: '/advertising'
        },
        {
            nome: 'Jobs',
            link: '/jobs'
        },
        {
            nome: 'Subscriptions',
            link: '/subscriptions'
        },
        {
            nome: 'Talent Workshops',
            link: '/workshops'
        },
        {
            nome: 'CPSC Certificates',
            link: '/cpsc'
        },
        {
            nome: 'Ratings',
            link: '/ratings'
        },
        {
            nome: 'Shop Help',
            link: '/shop-help'
        },
        {
            nome: 'Contact Us',
            link: '/contact'
        }

    ]

    const Sites = [

        {
            nome: 'DC',
            link: '/dc'
        },
        {
            nome: 'MAD Magazine',
            link: '/magazine'
        },
        {
            nome: 'DC Kids',
            link: '/kids'
        },
        {
            nome: 'DC Universe',
            link: '/universe'
        },
        {
            nome: 'DC Power Visa',
            link: '/power-visa'
        }

    ]

    const Shop = [

        {
            nome: 'Shop DC',
            link: '/shop'
        },
        {
            nome: 'Shop DC Collectibles',
            link: '/shop-dc'
        }

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
                            <CicleObject object={DCComics} />
                            <span className="fs-5">
                                SHOP
                            </span>
                            <CicleObject object={Shop} />
                        </div>
                        <div id="block">
                            <span className="fs-5">
                                DC
                            </span>
                            <CicleObject object={DC} />
                        </div>
                        <div id="block">
                            <span className="fs-5">
                                SITES
                            </span>
                            <CicleObject object={Sites} />
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