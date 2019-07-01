import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import socialFollowStyles from './social-follow.module.sass'

const SocialFollow = () => {
    return (
        <div>
            <a
                href="https://www.linkedin.com/in/greg-parr-26918741/"
                className={`${socialFollowStyles.linkedin} ${socialFollowStyles.social}`}
                target="_blank"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
                href="https://github.com/geejay81"
                className={`${socialFollowStyles.github} ${socialFollowStyles.social}`}
                target="_blank"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
                href="https://www.twitter.com/gregparr"
                className={`${socialFollowStyles.twitter} ${socialFollowStyles.social}`}
                target="_blank"
            >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
    )
}

export default SocialFollow