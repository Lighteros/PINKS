import "./PrivacyPolicy.css";
import DetailHeader from "./components/Header/DetailHeader";
import React, { useEffect } from "react";
function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="detail-app">
      <DetailHeader />
      <div className="container privacy-wrap">
        <p className="privacy-content">
          This Privacy Policy, as amended or otherwise changed from time to time
          (this “Privacy Policy”), explains the manner in which Blockchain Game
          Partners, Inc., dba Starcoin its subsidiaries, parent companies,
          affiliates, and other corporate entities under common ownership
          including, but not limited to, all websites that link this Privacy
          Policy (“Starcoin”, “we“, “us“, or “our“) collects, uses, maintains
          and discloses user information obtained through its websites,
          applications, brands, services and products (collectively,
          “Services”). Whenever you access or use the Services, you accept the
          terms and conditions of this Privacy Policy. If you do not agree with
          or you are not comfortable with any aspect of this Privacy Policy, you
          should immediately discontinue access or use of the Services.
        </p>
        <div className="privacy-title">Privacy Policy Updates and Changes</div>
        <p className="privacy-content">
          On occasion, Starcoin may update and change this Privacy Policy to
          reflect changes in law, our personal data collection and use
          practices, the features available through the Services, or advances in
          technology. If material changes are made to this Privacy Policy, the
          changes will be prominently posted on websites and applications.
          Capitalized terms not defined herein shall have the meanings ascribed
          to them in Starcoin’s Terms and Conditions
        </p>

        <div className="privacy-title">Pertinent Definitions</div>
        <p className="privacy-content">
          “Personal Data” means data you may give Starcoin to identify or
          contact you, including, for example, your name, address, User ID,
          telephone number, e-mail address, any blockchain addresses, as well as
          any other non-public information about you that is associated with or
          linked to any of the foregoing data “Anonymous Data” means data that
          is not associated with or linked to your Personal Data; Anonymous Data
          does not, by itself, permit the identification of individual persons.
          “Anonymous Data” means data that is not associated with or linked to
          your Personal Data; Anonymous Data does not, by itself, permit the
          identification of individual persons. We only collect and process
          Personal Data about you where we have lawful bases to do so. Lawful
          bases include consent where you have given consent, contract, and
          legitimate interests
        </p>

        <div className="privacy-title">Information We Collect</div>
        <p className="privacy-content">
          We may collect Personal Data from you, such as your first and last
          name, e-mail and mailing addresses, User ID, date of birth, government
          issued identification, and password when you register for an account
          on the Services (“Account”) or otherwise use the Services. We may also
          collect other Personal Data provided by third party identity
          verification services or via social networking websites. If you tell
          us where you are (e.g.by allowing your mobile device or computer to
          send us your location), we may store that information We may collect
          your Personal Data, such as your User ID and it may be used to track
          you across devices and connect you to alternative datasets that we
          have, including but not limited to, discord data, your wallet, and
          game related data. ·Certain services, such as two-factor
          authentication, may require our collection of your phone number. We
          may associate that phone number to your mobile device identification
          information. If you provide us feedback or contact us via e-mail,
          message chat or similar functionality, we will collect your name and
          e-mail address, as well as any other content included in the
          communication, in order to send you a reply. ·Transactional
          information when you request information or purchase a product or
          service from us. ·We also collect other types of Personal Data that
          you provide to us voluntarily when seeking support services, such as
          email, information submitted via online form, video conferencing
          service information, other contact information, or other information
          provided to support services staff. ·We may collect other data,
          including but not limited to, referral URLs, your location, blockchain
          analytics information related to blockchain addresses you provide.
        </p>

        <div className="privacy-title">
          Some information is collected automatically by our servers
        </div>
        <p className="privacy-content">
          Our servers (which may be hosted by a third party service provider)
          collect information from you, including your browser type, operating
          system, Internet Protocol (“IP”) address (a number that is
          automatically assigned to your computer when you use the Internet,
          which may vary from session to session), domain name, and/or a
          date/time stamp for your visit. ·As is true of most websites, we
          gather certain information automatically and store it in log files.
          This information includes IP addresses, browser type, Internet service
          provider (“ISP”), referring/exit pages, operating system, date/time
          stamp, and clickstream data. ·Like many online services, we use
          cookies to collect information. “Cookies” are small pieces of
          information that a website sends to your computer’s hard drive while
          you are viewing the website. ·We retain information on your behalf,
          such as transactional data and other session data linked to your
          Account.
        </p>

        <div className="privacy-title">How We Use Your Information</div>
        <p className="privacy-content">
          We will only use your Personal Data when the law allows. Please note
          that we may process your Personal Data without your knowledge or
          consent where this is required or permitted by law. In general,
          Personal Data you submit to us is used either to respond to requests
          that you make, or to aid us in serving you better. We use your
          Personal Data in the following ways: ·facilitate the creation of and
          secure your Account on the network; ·identify you and perform identity
          verification through a service provider; ·provide improved
          administration of our websites and Services; ·improve the quality of
          experience when you interact with our websites and Services; ·send you
          a welcome e-mail to verify ownership of the e-mail address provided
          when your Account is created; send you administrative e-mail
          notifications, such as Account activity, transaction processing,
          security or support and maintenance advisories; ·identify, prevent,
          and report potentially suspicious, fraudulent, or illegal activities;
          ·notify you about important changes to our Terms and Conditions or
          Privacy Policy; and respond to your inquiries or other requests. ·We
          use IP addresses to make our website and Services more useful to you,
          and to perform identity verification
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
