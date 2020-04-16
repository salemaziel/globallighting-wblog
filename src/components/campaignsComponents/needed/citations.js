import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class Citations extends React.Component {
  render() {
    return (
    <section className="citations">
      <Container className="citations">
        <Row>
          <Col />
          <Col>
            <Container>
                <h3 className="citations">References</h3>
              <ol className="citations">
                <li className="citations">
                  {" "}
                  <em>
                    “CoronaVirus Disease COVID-19-Prevent Getting
                    Sick-Cleaning-Disinfection (2020);”
                  </em>{" "}
                  Centers for Disease Control and Prevention, CDC
                  (https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html).
                  Accessed April 14, 2020.
                </li> <br />
                <li className="citations">
                  {" "}
                  <em>“New coronavirus stable for hours on surfaces”</em>; CDC
                  (extracted from N van Doremalen, et al. Aerosol and surface
                  stability of HCoV-19 (SARS-CoV-2) compared to SARS-CoV-1. The
                  New England Journal of Medicine. DOI: 10.1056/NEJMc2004973
                  (2020)
                  (https://www.nih.gov/news-events/news-releases/new-coronavirus-stable-hours-surfaces).
                </li> <br />
                <li className="citations">
                  <em>
                    "Inactivation of the coronavirus that induces severe acute
                    respiratory syndrome, SARS-CoV"{" "}
                  </em>{" "}
                  M.E.R. Darnell, K. Subbarao, S.M. Feinstone, D.R. Taylor. J
                  Virol Methods, 121 (2004), <strong>pp. 85-91,</strong> doi:
                  10.1016/j.jviromet.2004.06.006{" "}
                </li> <br />
                <li className="citations">
                  {" "}
                  <em>
                    “Large-scale preparation of UV-inactivated SARS coronavirus
                    virions for vaccine antigen,”{" "}
                  </em>{" "}
                  Tsunetsugu-Yokota Y et al. Methods Mol Biol. 2008;{" "}
                  <strong>454:119-26. </strong> doi:
                  10.1007/978-1-59745-181-9_11.
                </li> <br />
                <li className="citations">
                  {" "}
                  <em>
                    “Efficacy of an Automated Multiple Emitter Whole-Room
                    Ultraviolet-C Disinfection System Against Coronaviruses MHV
                    and MERS-CoV,”{" "}
                  </em>{" "}
                  Bedell K et al. ICHE 2016 May; <strong>37(5):598-9.</strong>{" "}
                  doi:10.1017/ice.2015.348. Epub 2016 Jan 28.
                </li> <br />
                <li className="citations">
                  {" "}
                  <em>
                    “Miscellaneous Inactivating Agents - Guideline for
                    Disinfection and Sterilization in Healthcare Facilities
                    (2008);”{" "}
                  </em>{" "}
                  Centers for Disease Control and Prevention, National Center
                  for Emerging and Zoonotic Infectious Diseases (NCEZID),
                  Division of Healthcare Quality Promotion (DHQP)
                  (https://www.cdc.gov/infectioncontrol/guidelines/disinfection/disinfection-methods/miscellaneous.html)
                </li> <br />

                <li className="citations">
                  {" "}
                  <em>"UV LED Disinfection 101" Beck, Sara. (2018).</em> UV LED
                  Disinfection 101. 20.<strong> 4-9. </strong>{" "}
                  https://www.researchgate.net/publication/327574354_UV_LED_Disinfection_101
                </li> <br />
              </ol>
            
           {/* <li className="citations">
              UV-C disinfection is to be used in a “multibarrier approach”
              alongside other technologies as well as regular filtering or
              cleaning in order to ensure that any pathogen not “killed” by one
              method will be inactivated by another.{" "}
                  </li> <br />*/}

            </Container>
          </Col>
        </Row>
      </Container>
      </section>
    )
  }
}

export default Citations