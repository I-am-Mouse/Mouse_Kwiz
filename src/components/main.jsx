import nature from "../assets/images/nature-logo.svg";
import random from "../assets/images/random-logo.svg";
import general from "../assets/images/general-knowledge-logo.svg";
import iq from "../assets/images/iq-related-logo.svg";
import { Link } from "react-router-dom";

const Main = () => {

    return (

        <main className="flex">
            <div>
                <h1>Welcome to the<br/> <span>Mouse <strong>KWIZ!</strong></span>&#x1F9D9;</h1>
                <p>Pick a topic to get started.</p>
            </div>
            <div>
                <Link to={"/questionpage/Nature"}><p><img src={nature} alt="nature"/>Nature</p></Link>
                <Link to={'/questionpage/General Knowledge'}><p><img src={general} alt="general" />General Knowledge</p></Link>
                <Link to={'/questionpage/IQ Related'}><p><img src={iq} alt="iq-related" />IQ-Related</p></Link>
                <Link to={'/questionpage/Randoms'}><p><img src={random} alt="random" />Randoms</p></Link>
            </div>
        </main>
    )
}

export default Main;