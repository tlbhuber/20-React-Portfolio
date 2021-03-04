import { Tab, Row, Col, ListGroup, TabContent, Container } from "react-bootstrap"


function Skills() {
    return (

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" style = {{
                    paddingBottom: 50
        }}>
                    <Container>
            <h3 style= {{
                textAlign: "center"
            }}>Skills</h3>
        </Container>

        <Row>
          <Col sm={5}>
            <ListGroup>
              <ListGroup.Item action href="#link1" variant="primary">
                Front End Skills
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" variant="primary">
                Back End Skills
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1" >
                <TabContent ><ul style = {{
                    listStyleType: "none", 
                }}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Git</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>React</li>
                </ul></TabContent>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <TabContent>
                <ul style={{
                            listStyleType: "none"
                }}>
                    <li>MySql</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Bash</li>
                </ul>
                </TabContent>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    )
}

export default Skills;