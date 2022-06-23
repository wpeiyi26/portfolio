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
                    <Container className="div-transition" style={{ animationDelay:"200ms"}}>
                        <h4 className="mb-3">&lt;h1&gt;</h4>
                        <h2>Skills</h2>
                    </Container>
                </Row>
                <Row className="left">
                    <Container className="div-transition mt-3" style={{ animationDelay:"200ms"}}>
                        <h4>&lt;/h1&gt;</h4>
                    </Container>
                </Row>
                <div className="technologies">
                    <Row>
                        <Container className="div-transition" style={{ animationDelay:"300ms"}}>
                            <h4 className="removeMargin mb-3">&lt;h2&gt;</h4>
                            <h3>Technologies</h3>
                        </Container>
                    </Row>
                    <Row className="left">
                        <Container className="div-transition mt-3" style={{ animationDelay:"300ms"}}>
                            <h4>&lt;/h2&gt;</h4>
                        </Container>
                    </Row>
                    <Container className="skillsTabs div-transition" style={{ animationDelay:"500ms"}}>
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
                                    My most used coding language to build most of my projects paired with the Node.js framework.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>   
                                <p>
                                    I used React as the front-end framework for one of my final university group projects.
                                    As compared to Handlebars.js which I used for a previous project, I thoroughly enjoyed React a lot more,
                                    and I can see why it is a popular framework.
                                    <br></br>
                                    I further improved my React skills by creating this website! 
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    Express.js was the primary framework I used for Node.js applicatons.
                                    Took me a while to feel comfortable as it was very new to me but it was all good
                                    after getting the hang of it.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Familiar</h4>   
                                <p>
                                    I picked up Discord.js when I was trying to code up a music bot for my discord channels
                                    when "Groovy" (the most popular music bot on discord) closed down permanently.
                                    The bot is still a work in progress and sadly been pushed aside for the time being but
                                    I am hoping to find some time soon to finish this up!
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    I have been using CSS consistently for around the past two years and I would say I am pretty
                                    confident with it. I took the opportunity to learn more advanced CSS such as transitions and animations
                                    through building this website which was actually super fun!
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    Contrary to popular opinion, I really like C. It was the second language I learnt after Python,
                                    and although difficult at first, I appreciated the control it gave the programmer.
                                    <br></br>
                                    C made it easier for me to pick up other programming languages. Throughout my course, I used C to learn about
                                    algorithms and computer networking. The most interesting project I have done is coding a DNS server!
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Competent</h4>
                                <p>
                                    I picked up C# whilst doing a subject on game development using Unity. I had only done Python and C before this 
                                    so it was a little confusing. The subject was super fun though so I learnt it pretty quickly. 
                                    <br></br>
                                    I got to code a ray tracer using C# which was very intimidating and a huge learning curve for me but the results
                                    were so worth it!!
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    My first ever experience with coding/computing/programming. I had zero knowledge before "Fundamentals of Computing" in
                                    university and I learnt it pretty quickly. It was a good starting point for me. Although I have not used it in a while,
                                    I do not think I would have a problem picking it up again.
                                    <br></br>
                                    I also used Python to study data processing utilising jupyter notebooks. Can't say I am great at it right now but
                                    definitely hoping to relearn in the future.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Familiar</h4>
                                <p>
                                    My course never explicitly taught me about Object-oriented programming so after I graduated, I took an online course 
                                    to properly learn it. I took this opportunity to use Java, which I had no prior experience in to add to my skillset. 
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Competent</h4>
                                <p>
                                    MongoDB was the primary database management platform I used for my university projects. 
                                    I am familiar with the basic set up and usage of MongoDB however, not with the more advanced features it has to offer.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    I used Github for both group and individual projects and I really see the value in version control. I think it is a must-know
                                    for anyone who does programming. I have touched on automatic testing through Github actions and keen to utilise it in my future projects.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    Figma is the primary software I use to create high fidelity prototypes of websites before I jump into coding. As someone with a design
                                    background, I appreciate a draft or a general layout of the website rather than figuring it out after. 
                                    <br></br>
                                    I love design and this is one of my favourite steps in web development. I take prototypes as a guide but always flexible to changes when coding.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    I am confident with the use of Photoshop, Illustrator, InDesign, XD and Lightroom.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Proficiency: Skilled</h4>
                                <p>
                                    I had the opportunity to work using the Agile methodology for my final university project. It made for better time and resource management utilising 
                                    sprints and kanban boards specifically using the Confluence and Jira softwares.
                                    <br></br>
                                    The subject encouraged us to properly follow the Agile methodology which meant client meetings at the end of each sprint to present what we had done 
                                    and to discuss what would be done in the next sprint.
                                </p>
                            </TabPanel>
                        </Tabs>
                    </Container>
                </div>

                <div className="hobbies">
                    <Row>
                        <Container className="div-transition" style={{ animationDelay:"600ms"}}>
                            <h4 className="removeMargin mb-3">&lt;h2&gt;</h4>
                            <h3>Hobbies and Interests</h3>
                        </Container>
                    </Row>
                    <Row className="left">
                        <Container className="div-transition mt-3" style={{ animationDelay:"600ms"}}>
                            <h4>&lt;/h2&gt;</h4>
                        </Container>
                    </Row>
                    <Container className="skillsTabs div-transition" style={{ animationDelay:"800ms"}}>
                        <Tabs>
                            <TabList>
                                <Tab>Design</Tab>
                                <Tab>UI/UX</Tab>
                                <Tab>Architecture</Tab>
                                <Tab>Music</Tab>
                                <Tab>Gaming</Tab>
                                <Tab>Marketing</Tab>
                                <Tab>Sports and Fitness</Tab>
                            </TabList>

                            <TabPanel>
                                <p>
                                    I have been interested in design for as long as I can remember. From traditional art to digital design, 
                                    I have dabbled in a lot of different fields. I especially love crafting and making things aside from drawing.
                                    <br></br>
                                    In university, I had the opportunity to be the Design Director of the Malaysians of UniMelb society where I 
                                    curated the whole design direction of the society for my fiscal term.
                                    <br></br>
                                    In my free time now, I do a lot of calligraphy and sometimes even do freelance work for events like weddings!
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    When coming up with the design or general layout of the website, I always keep in mind general UI/UX rules. 
                                    I follow a lot of UI/UX pages on Instagram so I am quite up to date with the trends and it always amazes me how
                                    a small thing could affect users' experiences.
                                    <br></br>
                                    I studied UI/UX in university by evaluating other websites and doing usability tests which I implemented in my own
                                    projects which is more fun than it sounds.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    Fun fact: I started out university with architecture as my major. After a semester, I figured that architecture was not
                                    something I wanted to do but something I am just appreciating. I still continued to take architecture history classes after 
                                    my first semester where I really enjoyed learning about post-modernism architecture especially.
                                    <br></br>
                                    Some of my favourites: Villa Savoye, France by Le Corbusier and Rokko Housing, Japan by Tadao Ando
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    I learnt the electronic organ for 8 years achieving Grade 5 certification for my practical skills and Grade 6 for 
                                    theory. Sadly, I have not played it since I came to Melbourne in 2019 as it is not exactly a common instrument. I do miss 
                                    playing, hoping to come across an organ here soon... 
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    I love all sorts of games but especially puzzle games! My recent obsessions have been the classic Minesweeper and Spider solitaire.
                                    I am also a decent opponent in Tetris battles. Aside from puzzles, I do enjoy strategy FPS games as well such as Valorant and COD.
                                    <br></br>
                                    What I am playing now: Pokemon Arceus Legends
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    Picked up marketing and branding subjects in university which I enjoyed. I especially love reading about branding concepts and the 
                                    marketing strategy when I see an interesting advert! 
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>
                                    I played a lot of sports back in school like volleyball in high school. Would not say I am an amazing player but it is really fun
                                    for me specifically team sports! I also picked up Muay Thai in college which were really good workout sessions. Currently, I occasionally
                                    do pilates and trying out strength workout classes.
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