import BannerSocial from './BannerSocial/BannerSocial';
import BannerHeadline from './BannerHeadline/BannerHeadline';
import BannerGallery from './BannerGallery/BannerGallery';
import './Banner.css';

const Banner = () => (
  <div className="banner" id="momentos">
    <BannerSocial line={<div className="line-vert"></div>} />
    <BannerHeadline />
    <BannerGallery />
  </div>
);

export default Banner;
