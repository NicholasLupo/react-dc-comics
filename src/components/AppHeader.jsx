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
                    <div className="logo col-2">
                        <img src='/img/dc-logo.png' alt="" />
                    </div>
                    <div className="selector col-10">
                        <CicleList array={options} />
                    </div>
                </div>
            </div>
        </header>

    )
}