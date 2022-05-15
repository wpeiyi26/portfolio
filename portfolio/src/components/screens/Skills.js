import { React, useState } from "react";
import { Container, Row, Button} from "react-bootstrap"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../../styles/Skills.css'

import 'react-tabs/style/react-tabs.css';

function Skills() {

    return (
        <section className="skills">
            <Container className="main">
                <Row>
                    <h4>&lt;h1&gt;</h4>
                    <h2>Skills</h2>
                </Row>
                <Row className="left">
                    <h4>&lt;/h1&gt;</h4>
                </Row>
                <div className="technologies">
                    <Row>
                        <h4 className="removeMargin">&lt;h2&gt;</h4>
                        <h3>Technologies</h3>
                    </Row>
                    <Row className="left">
                        <h4>&lt;/h2&gt;</h4>
                    </Row>
                    <Container className="skillsTabs">
                        <Tabs>
                            <TabList>
                                <Tab>Javascript</Tab>
                                <Tab>React.js</Tab>
                                <Tab>Express.js</Tab>
                                <Tab>Discord.js</Tab>
                                <Tab>CSS</Tab>
                                <Tab>C</Tab>
                                <Tab>C#</Tab>
                                <Tab>Python</Tab>
                                <Tab>Java</Tab>
                                <Tab>MongoDB</Tab>
                                <Tab>Github</Tab>
                                <Tab>Figma</Tab>
                                <Tab>Adobe Suites</Tab>
                                <Tab>Agile Development</Tab>
                            </TabList>

                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>Javascript </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>   
                                <p>
                                    <b>React.js </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>Express.js </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Familiar</h4>   
                                <p>
                                    <b>Discord.js </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>CSS </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>C </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>C# </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>Python </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Beginner</h4>
                                <p>
                                    <b>Java </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Familiar</h4>
                                <p>
                                    <b>MongoDB </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>Github </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>Figma </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>Adobe Suites </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    <b>Agile Development </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                        </Tabs>
                    </Container>
                </div>

                <div className="hobbies">
                    <Row>
                        <h4 className="removeMargin">&lt;h2&gt;</h4>
                        <h3>Hobbies and Interests</h3>
                    </Row>
                    <Row className="left">
                        <h4>&lt;/h2&gt;</h4>
                    </Row>
                    <Container className="skillsTabs">
                        <Tabs>
                            <TabList>
                                <Tab>Design</Tab>
                                <Tab>UI/UX</Tab>
                                <Tab>Music</Tab>
                                <Tab>Gaming</Tab>
                                <Tab>Marketing</Tab>
                                <Tab>Sports</Tab>
                            </TabList>

                            <TabPanel>
                                <p>
                                    <b>Design </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    <b>UI/UX </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    <b>Music </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    <b>Gaming </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    <b>Marketing </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    <b>Sports </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </TabPanel>
                        </Tabs>
                    </Container>
                </div>

            </Container>
        </section>
    )
}

export default Skills