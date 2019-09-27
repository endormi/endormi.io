import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Text, Box, Link, Flex } from "rebass";
import Fade from "react-reveal/Fade";
import SocialLink from "./SocialLink";

const FooterContainer = styled.footer`
  min-width: 300px;
  max-width: 1366px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const TextFooter = styled(Text)`
  color: ${props => {
    return props.theme.colors.background;
  }};

  & a {
    color: ${props => {
      return props.theme.colors.background;
    }};
  }
`;

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks } = data.contentfulAbout;

        return (
          <Box p={5} backgroundColor="primaryDark">
            <FooterContainer>
              <Fade left>
                <TextFooter fontSize={[2, 3]}>
                  <span>
                    {`${name} Portfolio `} © {new Date().getFullYear()}
                  </span>
                  <span> - Powered by </span>
                  <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
                  <span> and </span>
                  <Link href="https://www.contentful.com/" mr={1}>
                    Contentful
                  </Link>
                  <span> - </span>
                  <Link href="https://endormi-blog.netlify.com/">My blog</Link>
                </TextFooter>
              </Fade>
              <Flex>
                <Fade right>
                  {socialLinks.map(({ id, ...rest }) => {
                    return (
                      <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                        <SocialLink {...rest} color="background" />
                      </Box>
                    );
                  })}
                </Fade>
              </Flex>
            </FooterContainer>
          </Box>
        );
      }}
    />
  );
};

export default Footer;
