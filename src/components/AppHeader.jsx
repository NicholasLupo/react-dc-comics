import LogoImg from "../assets/img/dc-logo.png"

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

    const ul = document.getElementById('list');

    const element = options.forEach(function (option) {

        const li = document.createElement('li');
        li.innerText = option
        ul.appendChild(li)

    })


    return (

        <header>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <img src={LogoImg} alt="" />
                    </div>
                    <div className="selector">
                        <ul id="list" className="list-group list-group-horizontal"></ul>
                    </div>
                </div>
            </div>
        </header>

    )
}