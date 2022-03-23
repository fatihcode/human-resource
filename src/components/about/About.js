import React from 'react'

export default function About() {
    return (

        <section className="page-section" id="about">
            <div className="container">

                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>

                <ul className="timeline">

                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="./about/1.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">

                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">İnsan doğasına uygun İK çözümlerini prensip edinen firmamızın sağladığı hizmetler, uzun yıllar elde edilen bilgi birikimi ve deneyimin bir sonucudur. Bu hizmetler, insan kaynakları gelişim trendleri ışığında hizmet verilecek kuruma/ kitleye özelleştirilerek verilmektedir.</p></div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="./about/2.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">

                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Firmamız; deneyimli, güçlü ve her geçen gün büyüyen işe alım kadrosuyla birçok sektördeki kurumsal müşterisine en iyi işe alım deneyimini yaşatmaktadır.</p></div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="./about/3.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">

                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Mutlu çalışan – mutlu müşteri – inovasyon odaklı - öğrenen organizasyon yapısıyla hem her gün gelişen hem de geliştiren yaklaşımlarıyla kurumsal müşterilerine katma değer sağlayan firmamız, işe alıma farklı bir boyut kazandırmıştır.</p></div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="./about/4.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">

                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Türkiye’nin lider işe alım danışmanlık firmalarından biri olarak hedeflerimizden biri de yurtdışı şubeleriyle globalde de lider firmalardan biri haline gelmektir.</p></div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}