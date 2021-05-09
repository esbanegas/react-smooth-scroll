import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/singin">How it works</FooterLink>
              <FooterLink to="/singin">Testimonials</FooterLink>
              <FooterLink to="/singin">Careers</FooterLink>
              <FooterLink to="/singin">Investors</FooterLink>
              <FooterLink to="/singin">Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/singin">Submit Video</FooterLink>
              <FooterLink to="/singin">Ambassadors</FooterLink>
              <FooterLink to="/singin">Agency</FooterLink>
              <FooterLink to="/singin">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/singin">Contact</FooterLink>
              <FooterLink to="/singin">Support</FooterLink>
              <FooterLink to="/singin">Destinations</FooterLink>
              <FooterLink to="/singin">Sponsorships</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/singin">Instagram</FooterLink>
              <FooterLink to="/singin">Facebook</FooterLink>
              <FooterLink to="/singin">Youtube</FooterLink>
              <FooterLink to="/singin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">dolla</SocialLogo>

            <WebsiteRights>
              dolla © {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink
                href="https://es-la.facebook.com/"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/"
                target="_blank"
                arial-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/?lang=es"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://es.linkedin.com/"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
