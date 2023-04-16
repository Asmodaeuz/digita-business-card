import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
        <footer className="footer">
            <a
                href="https://github.com/Asmodaeuz"
                target="_blank"
                className="social button">
                    <FontAwesomeIcon icon={faGithub} />
            </a>
        </footer>
    )
}