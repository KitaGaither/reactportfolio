import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import me from '../assets/images/me.png';
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';

class Resume extends Component {
    render() {
        return(
            <div className="home-components div4">
                <Row>
                    <Col col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={me}
                            alt="avatar of lakita gaither"
                            style={{height: '200px'}}
                            className=""
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Lakita Gaither</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore placeat accusantium voluptates id unde asperiores magni! Nemo tempore deleniti hic nostrum commodi dolor? Harum neque ipsam natus optio? Tenetur.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 97025 </p>
                        <h5>Phone</h5>
                        <p>(123)123-4567</p>
                        <h5>Email</h5>
                        <p>k@gmail.com</p>
                        <h5>Web</h5>
                        <p>lakitagaither.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Col>


                    <Col className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                        startYear={2017}
                        endYear={2021}
                        schoolName="Southern New Hampshire University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />

                        <Education
                        startYear={2021}
                        endYear={2021}
                        schoolName="Nucamp"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                        startYear={2020}
                        endYear={2021}
                        jobName="IT Business Analyst at Vanderbilt"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />

                        <Experience 
                        startYear={2019}
                        endYear={2020}
                        jobName="Quality Assurance Specialist at TikTok"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                        skill="javascript"
                        progress="70"
                        />
                        <Skills 
                        skill="HTML/CSS"
                        progress="90"
                        />
                        <Skills 
                        skill="React"
                        progress="50"
                        />
                        <Skills 
                        skill="NodeJS"
                        progress="10"
                        />
                        
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Resume;