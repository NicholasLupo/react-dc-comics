import CicleList from "./CicleList";
import CicleObject from "./CicleObject";

export default function AppHeader() {

    const options = [

        {
            nome: 'CHARACTERS',
            link: '/characters'
        },
        {
            nome: 'COMICS',
            link: '/comics'
        },
        {
            nome: 'MOVIES',
            link: '/movies'
        },
        {
            nome: 'TV',
            link: '/tv'
        },
        {
            nome: 'GAMES',
            link: '/games'
        },
        {
            nome: 'COLLECTIBLES',
            link: '/collectibles'
        },
        {
            nome: 'VIDEOS',
            link: '/videos'
        },
        {
            nome: 'FANS',
            link: '/fans'
        },
        {
            nome: 'NEWS',
            link: '/news'
        },
        {
            nome: 'SHOP',
            link: '/shop'
        },

    ]

    return (

        <header>
            <div className="container">
                <div className="row">
                    <div className="logo col-2">
                        <img src='/img/dc-logo.png' alt="" />
                    </div>
                    <div className="selector col-10">
                        <CicleObject object={options} />
                    </div>
                </div>
            </div>
        </header>

    )
}