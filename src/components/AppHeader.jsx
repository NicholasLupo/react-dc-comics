import CicleObject from "./CicleObject";

export default function AppHeader({ options }) {



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