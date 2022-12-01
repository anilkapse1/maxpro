import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
  const Footer = styled.section`
    background: ${({ theme }) => theme.colors.text1};
    height: 100%;
    padding-top: 100px;
    .parent {
      height: calc(100vh - 100px);
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-around;
      .footer_part {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        section {
          flex: 1 1 30%;
          h3 {
            font-weight: 300;
            margin-bottom: 15px;
            color: ${({ theme }) => theme.colors.white};
            span {
              color: ${({ theme }) => theme.colors.cyan};
            }
          }
          p {
            color: ${({ theme }) => theme.colors.white};
            font-weight: 300;
            font-size: 0.7rem;
          }

          .icons{
            Button{
              border:none!important;
            }
          }
          &:nth-child(2) {
            flex: 1 1 70%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-around;
            h4 {
              font-weight: 300;
              margin-bottom: 15px;
              color: ${({ theme }) => theme.colors.white};
            }
            ul {
              list-style-type: none;
              margin: 0px;
              padding: 0px;
              li {
                font-weight: 300;
                color: ${({ theme }) => theme.colors.white};
              }
            }
          }
        }
      }
      .footer_description{
        margin-top:30px;
          p{
            color:${({theme})=>theme.colors.white};
            font-size:.6rem;
          }
        }
    }
  `;

  return (
    <Footer>
      <Container>
        <div className="parent">
          <div className="footer_part">
            <section>
              <h3>
                Max<span>Pro</span>
              </h3>
              <p>© 2010 - 2022, MaxPro Broking Ltd. All rights reserved.</p>
              <div className="icons">
                <IconButton className="customButton" aria-label="fingerprint" color="secondary">
                 <TwitterIcon/>
                </IconButton>
                <IconButton className="customButton" aria-label="fingerprint" color="secondary">
                  <LinkedInIcon/>
                </IconButton>
              </div>
            </section>
            <section>
              <div>
                <h4>company</h4>
                <ul>
                  <li>about</li>
                  <li>products</li>
                  <li>pricing</li>
                  <li>careers</li>
                  <li>press & media</li>
                </ul>
              </div>
              <div>
                <h4>support</h4>
                <ul>
                  <li>contact us</li>
                  <li>support portal</li>
                  <li>max pro blog</li>
                  <li>list of charge</li>
                  <li>video</li>
                  <li>market overview</li>
                </ul>
              </div>
              <div>
                <h4>account</h4>
                <ul>
                  <li>open an account</li>
                  <li>fund transfer</li>
                  <li>60 day challenge</li>
                </ul>
              </div>
            </section>
          </div>
          <div className="footer_description">
            <p>
              MaxPro Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
              no.: INZ000031633 CDSL: Depository services through MaxPro
              Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
              Trading through MaxPro Commodities Pvt. Ltd. MCX: 46025 – SEBI
              Registration no.: INZ000038238 Registered Address: MaxPro Broking
              Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
              School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
              For any complaints pertaining to securities broking please write
              to complaints@MaxPro.com, for DP related to dp@MaxPro.com.
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF</p> 
              
              <p>Procedure to file a complaint on SEBI
              SCORES: Register on SCORES portal. Mandatory details for filing
              complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
              ID. Benefits: Effective Communication, Speedy redressal of the
              grievances</p> 
              
              <p>Investments in securities market are subject to market
              risks; read all the related documents carefully before investing.
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.</p>


              <p>"Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of MaxPro and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </Container>
    </Footer>
  );
};

export default Footer;
