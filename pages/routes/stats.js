import Image from "next/image";
import '../../styles/routes/stats.scss';
import Circle from '../../public/circle.png';

export default function Stats() {
    return (
        <div className='StatsPage'>
            <main className='StatsPage__main'>
                <section className='StatsPage__main--topbar'>
                    <p className='StatsPage__main--topbar__title'>SCENE IN THE GAME</p>
                    <p className='StatsPage__main--topbar__content'>Lorem Epsime rafdrw e kdsd fdosm Lorem Epsime rafdrw e kdsd fdosm </p>
                </section>
                <section className="StatsPage__main--stats">
                    <div className="StatsPage__main--stats__content">
                        <div className='StatsPage__main--stats__content--title'>
                            <div className='StatsPage__main--stats__content--title__image'>
                                <Image src={Circle} />
                            </div>
                            <div className='StatsPage__main--stats__content--title__desc'>
                                <p>EVENTS</p>
                            </div>
                        </div>
                        <div className='StatsPage__main--stats__content--title'>
                            <div className='StatsPage__main--stats__content--title__image'>
                                <Image src={Circle} />
                            </div>
                            <div className='StatsPage__main--stats__content--title__desc'>
                                <p>FACULTY</p>
                            </div>
                        </div>
                        <div className='StatsPage__main--stats__content--title'>
                            <div className='StatsPage__main--stats__content--title__image'>
                                <Image src={Circle} />
                            </div>
                            <div className='StatsPage__main--stats__content--title__desc'>
                                <p>SPORTS</p>
                            </div>
                        </div>
                    </div>
                    <div className="StatsPage__main--stats__data">
                        <div className='StatsPage__main--stats__data--figures'>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number first'>100+</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc'>EVENTS</div>
                            </div>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number second'>60+</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc'>HOSTED</div>
                            </div>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number'>70+</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc'>WON</div>
                            </div>
                        </div>
                        <div className='StatsPage__main--stats__data--figures'>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number first'>20+</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc'>MEMBERS</div>
                            </div>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number second'>30+</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc'>STAFFS</div>
                            </div>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number'>20+</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc'>TRAINERS</div>
                            </div>
                        </div>
                        <div className='StatsPage__main--stats__data--figures'>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number first'>100+</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc'>SPORTS</div>
                            </div>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number infinite'>∞</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc descInf'>SWEAT</div>
                            </div>
                            <div className='StatsPage__main--stats__data--figures__content'>
                                <div className='StatsPage__main--stats__data--figures__content--number infinite'>∞</div>
                                <div className='StatsPage__main--stats__data--figures__content--desc descInf'>FUN</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}