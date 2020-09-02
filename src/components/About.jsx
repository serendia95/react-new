import React from 'react';
import aboutphoto from './aboutphoto.png';

class About extends React.Component {
    render () {
        return (
            <div className="zero">
                <div className="container zero">
                    
                </div>
                <div className="container about">
                    <div className="row">
                        <div className="col text-center about-title" id="aboutx">
                            <h3>About</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm about-info">
                            <p>
                                Indonesia dikenal sebagai negara maritim hal itu disebabkan karena sebagian besar wilayah Indonesia ialah lautan, hal itu membuat Indonesia kaya akan sumber daya laut. Luasnya lautan yang dimiliki Indonesia banyak dimanfaatkan sebagai mata pencaharian, objek wisata dan lain lain. Salah satu mata pencaharian dengan memanfaatkan laut ialah nelayan. Nelayan ialah orang bekerja menangkap ikan atau biota yang ada di perairan tawar maupun laut, demi menunjang pekerjaannya tersebut nelayan memerlukan berbagai alat salah satunya ialah kapal atau perahu. Kapal atau perahu yang digunakan para nelayan memiliki berbagai macam dan akan terus berkembang sejalan dengan perkembangan teknologi, teknologi kapal dapat membantu para nelayan menjadi lebih mudah dan cepat dalam menjangkau wilayah tangkapan ikan di laut. Dalam bentuk dukungan dan tercapainya tujuan mengkonservasi dan memanfaatkan secara berkelanjutan sumber daya laut, samudra dan maritim untuk pembangunan yang berkelanjutan, maka dashboard ini dibuat. Demi menunjang kebutuhan data yang dimana selanjutnya dapat digunakan oleh Nelayan dan Masyarakat umum secara luas dalam memanfaatkan sumber daya laut di Indonesia.
                            </p>
                        </div>
                        <div className="col-sm text-center about-info">
                            <img src={aboutphoto}  className="img-fluid" alt="photo"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
  
export default About;