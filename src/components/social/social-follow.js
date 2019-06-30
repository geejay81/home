import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons"
import socialFollowStyles from './social-follow.module.sass'

const SocialFollow = () => {
    return (
        <div>
            <a
                href="https://www.youtube.com/channel/UC939nC6M8n05-uAFNdC3AuA"
                className={`${socialFollowStyles.youtube} ${socialFollowStyles.social}`}
            >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
                href="https://www.facebook.com/parrgreg"
                className={`${socialFollowStyles.facebook} ${socialFollowStyles.social}`}
            >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
                href="https://www.twitter.com/gregparr"
                className={`${socialFollowStyles.twitter} ${socialFollowStyles.social}`}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
                href="https://www.instagram.com/greg81uk"
                className={`${socialFollowStyles.instagram} ${socialFollowStyles.social}`}
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    )
}

export default SocialFollow