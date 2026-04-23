import CicleObject from "./CicleObject"

export default function AppFooter({ DCComics, DC, Sites, Shop, Social }) {

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
                            <CicleObject object={Social} />
                        </div>
                    </div>
                </div>
            </section>
        </footer >

    )

}