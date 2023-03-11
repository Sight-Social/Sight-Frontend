import React from 'react';
import {
  Container,
  CompanyName,
  LinkContainer,
  Link,
  LinkHeading,
} from './FooterElements';

function Footer() {
  return (
    <Container>
      <CompanyName>Sight LLC</CompanyName>
      <LinkContainer>
        <LinkHeading>Company</LinkHeading>
        <Link>About Us</Link>
        <Link>Contact</Link>
        <Link>Learn More</Link>
      </LinkContainer>
    </Container>
  );
}

export default Footer;
