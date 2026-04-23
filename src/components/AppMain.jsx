import CicleObject from "./CicleObject";
import comics from "../../comics"

export default function AppMain({ catalog }) {

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