import React from 'react'
import '../img/logo.png'
import '../styles/Footer.css'


class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
    }
    changeHandler = event => {
        this.setState({
            email: event.target.value
        });
    }

    render() {


        return (
            <div className="Footer">
                <img className="logo" src={require('../img/logo.png')} alt="logo"></img>
                <div className="footerList">
                    <div className="Help-Information "> HELP &#38; INFORMATION
                <div className="lorem">
                            <p className="Lorem-ipsum-dolor-si">Lorem ipsum dolor sit amet.</p>
                            <p className="Lorem-ipsum-dolor-si">Lorem ipsum dolor sit amet.</p>
                            <p className="Lorem-ipsum-dolor-si">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="About-GQ"> ABOUT GQ
                <div className="lorem">
                            <p className="Lorem-ipsum-dolor-si-Copy">Lorem ipsum dolor sit amet.</p>
                            <p className="Lorem-ipsum-dolor-si-Copy-2">Lorem ipsum dolor sit amet.</p>
                            <p className="Lorem-ipsum-dolor-si-Copy-3">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="Subscribe"> SUBSCRIBE
                <div className="lorem">
                            <p className="Lorem-ipsum-dolor">Lorem ipsum dolor sit amet, consectetur adipiscing  </p>
                            <form>
                                <input className="sub-e-mail"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                />
                            </form>
                        </div>

                    </div>

                </div>
                <div className="Information">Information</div>

                <div className="-Green-Queen-2019"> &copy;Green Queens 2019 </div>
            </div>
        );
    }
}


export default Footer