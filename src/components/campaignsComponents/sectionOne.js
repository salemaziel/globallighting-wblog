import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from '../button'
import '../../css/campaignpagecss/campaigns.css'

const CampaignSection1 = () => (
    <section>
        <Container className="sectionOneBg">
            <Row className="sectionOneRow">
                <Col className="colCampaignInfo">
                <h2>
                    About Our COVID-19 Relief Fund
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Button primary >
                    Center for Disease Control (CDC) Research
</Button>

                </Col>
                <Container className="boxDonateOuter">
                    <Container className="boxDonateInner">
                        <h2>
                            Donate to Relief Fund
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                        <Button primary>
                            Donate
                        </Button>
                    </Container>
                </Container>
                <Col>
                </Col>

            </Row>

        </Container>
    </section>
)

export default CampaignSection1