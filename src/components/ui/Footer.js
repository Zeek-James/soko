import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "reactstrap";
import { loremIpsum } from 'react-lorem-ipsum';


export const Footer = () => {
  return (
    <div className="footer-Container">
      <div className="foo d-flex justify-content-around  p-4">
        <div className="comb">
          <FontAwesomeIcon icon="truck-moving" className=" truck fa-2x" />
          <p>Fast Delivery</p>
        </div>
        <div className="comb">
          <FontAwesomeIcon icon="shield-alt" className="  fa-2x" />
          <p> Buyer Protection</p>
        </div>
        <div className="comb">
          <FontAwesomeIcon icon={["far", "clock"]} className="clock fa-2x" />
          <p>Customer Support</p>
        </div>
      </div>
       <div className="base_Container p-3  d-flex justify-content-center">
      <Container className="d-flex p-4 border-bottom m-4">
        <div className="mr-auto w-50">
          <h5>S<FontAwesomeIcon icon="shopping-bag"  className="fa-ms" />ko</h5>
          {loremIpsum()}
        </div>
        <div>
                      <div className='mb-5'>
                          <h5 className='mb-3'>REACH OUT TO US ON</h5>
            <a href="/#" className="m-3">
              <FontAwesomeIcon icon={["fab", "facebook"]} size='lg' />
            </a>
            <a href="/" className="m-3">
              <FontAwesomeIcon icon={["fab", "twitter"]} size='lg' />
                          </a>
                          <a href="/" className="m-3"> 
              <FontAwesomeIcon icon={["fab", "instagram-square"]} size='lg' />
            </a>
          </div>
            <p>Copyright 2021 All Rights Reserved</p>
        </div>
      </Container>
    </div>

    </div>
  );
};
