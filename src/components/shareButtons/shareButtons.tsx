import React, { FC } from 'react';
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
} from 'react-share';
import Spacer from '../spacer';

interface ShareButtonsProps {
  url: string
  title: string
  tags: string[]
}

const ShareButtons : FC<ShareButtonsProps> = ({ url, title, tags }) => {
  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon size={48} round={true} />
      </FacebookShareButton>
      <Spacer />
      <TwitterShareButton url={url} title={title} hashtags={tags}>
        <TwitterIcon size={48} round={true} />
      </TwitterShareButton>
      <Spacer />
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={48} round={true} />
      </LinkedinShareButton>
      <Spacer />
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={48} round={true} />
      </RedditShareButton>
      <Spacer />
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={48} round={true} />
      </WhatsappShareButton>
    </div>
  )
};

export default ShareButtons;