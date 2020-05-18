import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'

function ShareButtons ({ twitterHandle, url, title, tags }) {
  return (
  <div>
    <FacebookShareButton url={url}>
      <FacebookIcon />
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      hashtags={tags}
    >
      <TwitterIcon />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon />
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon />
    </WhatsappShareButton>
  </div>
)}

export default ShareButtons
