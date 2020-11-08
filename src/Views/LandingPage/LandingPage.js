import React, { Component } from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import ScheduleDemo from "../../Shared/ScheduleDemo/ScheduleDemo";
import Banner from "../../Assets/Svg/Home_Page/banner.png";
import Arrow from "../../Assets/Svg/Common/right-white.svg";
import ArrowRight from "../../Assets/Svg/Common/arrow-right.svg";
import Vip from "../../Assets/Svg/Home_Page/wp-vip.png";
import Magento from "../../Assets/Svg/Home_Page/magento.png";
import OpenCart from "../../Assets/Svg/Home_Page/open-cart.png";
import Shopify from "../../Assets/Svg/Home_Page/shopify.png";
import Woo from "../../Assets/Svg/Home_Page/woo.png";
import Wp from "../../Assets/Svg/Home_Page/wp.png";
import HeadingIcon from "../../Assets/Svg/Common/heading-icon.svg";
import Chrome from "../../Assets/Svg/Home_Page/chrome.png";
import Android from "../../Assets/Svg/Home_Page/android.png";
import Opera from "../../Assets/Svg/Home_Page/opera.png";
import Safari from "../../Assets/Svg/Home_Page/safari.png";
import Firefox from "../../Assets/Svg/Home_Page/firefox.png";
import Editor from "../../Assets/Svg/Home_Page/editor.jpg";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="main-banner">
          <div className="container">
            <img src={Banner} alt="Banner" />
            <div className="main-banner--content">
              <h1>
                Customer <span>Engagement Leads</span> to Better Sales
              </h1>

              <p>
                Get real time customer insights, generic and advanced
                segmentation channel, A/B testing and personalized communication
                with your mobile app and website traffic.
              </p>

              <div className="button-group">
                <button class="button button-secondary">Schedule a demo</button>
                <button class="button button-primary">
                  Start Free Trial
                  <img src={Arrow} alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="seamleass-integration">
          <div className="container">
            <div className="seamleass-integration--wrap">
              <h3 className="primary-heading flex-column">
                <img src={HeadingIcon} alt="heading-icon" />
                Seamless Integration to Fit Into Your Flow of Work
              </h3>
              <p>
                Whether you use Shopify, Wordpress, WooCommerce, Magento,
                Opencart or any website/app building platform – EngageAsap works
                where your does, so you don’t have to download or login to
                anything new
              </p>

              <div class="seamleass-integration--group">
                <img src={Vip} class="vip" alt="WP_Vip" />
                <img src={Magento} class="magento" alt="Magento" />
                <img src={OpenCart} class="open-cart" alt="Open_Cart" />
                <img src={Shopify} class="shopify" alt="Shopify" />
                <img src={Woo} class="woo" alt="Woo" />
                <img src={Wp} class="wp" alt="Wp" />
              </div>
            </div>

            <div className="browser-support">
              <h3 className="primary-heading">Works On These Browsers</h3>

              <div className="browser-support--wrap">
                <img src={Chrome} alt="Chrome" />
                <img src={Android} alt="Android" />
                <img src={Opera} alt="Opera" />
                <img src={Safari} alt="Safari" />
                <img src={Firefox} alt="Firefox" />
              </div>
            </div>

            <div className="editor-desk">
              <h3 className="primary-heading">Right From Our Editor’s Desk</h3>
              <div className="row">
                <div className="col-sm-4">
                  <figure class="editor-desk--card">
                    <span>
                      <img src={Editor} alt="Editor" />
                    </span>
                    <figcaption>
                      <h4>How to Boost Retention with In-App Messaging</h4>
                      <p>
                        <a href="/">
                          Read More
                          <img src={Arrow} alt="Arrow" />
                        </a>
                      </p>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-sm-4">
                  <figure class="editor-desk--card">
                    <span>
                      <img src={Editor} alt="Editor" />
                    </span>
                    <figcaption>
                      <h4>
                        The Best Push Notification Strategy for Boosting
                        Conversions
                      </h4>
                      <p>
                        <a href="/">
                          Read More
                          <img src={Arrow} alt="Arrow" />
                        </a>
                      </p>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-sm-4">
                  <figure class="editor-desk--card">
                    <span>
                      <img src={Editor} alt="Editor" />
                    </span>
                    <figcaption>
                      <h4>
                        Why Push Notifications are Critical in Improving
                        Customer Engagement on Mobile and Web?
                      </h4>
                      <p>
                        <a href="/">
                          Read More
                          <img src={ArrowRight} alt="Arrow" />
                        </a>
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ScheduleDemo />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
