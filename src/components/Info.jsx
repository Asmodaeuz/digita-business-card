import profilePicture from "../assets/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Info() {
    return (
        <div className="info--wrapper">
            <div className="info--image">
                <img src={profilePicture} alt="Alessandro Correa's profile picture" />
            </div>
            <div className="info--text">
                <div className="info--details">
                    <h1 className="details_name">Alessandro Correa</h1>
                    <h3 className="details_role">Software Developer</h3>
                    <a href="https://restaurant-menu-system.netlify.app/" target="_blank" className="details_site"><FontAwesomeIcon icon={faLink} />
                        Project: restaurant menu system
                    </a>
                </div>
                <div className="info--buttons">
                    <a href="mailto:oliveira.alessandroc@gmail.com"
                        target="_blank"
                        className="buttons_email button">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/alessandrocorreadeoliveira/"
                        target="_blank"
                        className="buttons_linkedin button">
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}