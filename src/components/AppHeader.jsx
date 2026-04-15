import LogoImg from "../assets/img/dc-logo.png"
import CicleList from "./CicleList";

export default function AppHeader() {

    const options = [
        'CHARACTERS',
        'COMICS',
        'MOVIES',
        'TV',
        'GAMES',
        'COLLECTIBLES',
        'VIDEOS',
        'FANS',
        'NEWS',
        'SHOP'
    ]

    return (

        <header>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <img src={LogoImg} alt="" />
                    </div>
                    <div className="selector">
                        <CicleList array={options} />
                    </div>
                </div>
            </div>
        </header>

    )
}