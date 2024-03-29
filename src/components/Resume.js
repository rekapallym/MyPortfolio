import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col= {4}>
                        <div style= {{textAlign: 'center'}}>
                          <img src= "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Favatars-21%2F512%2Favatar-circle-human-male-black-7-512.png&f=1" 
                          alt= 'img'
                          style={{height:'200px'}}/>
                        </div>
                        <h2 style ={{paddingTop: '2em'}}>Venkata Rekapally</h2>
                        <h4 style= {{color: 'grey'}}>Programmer</h4>
                        <hr  style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <hr  style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>4353 ForestWood Drive, San Jose, California, 95121</p>
                        <h5>Phone</h5>
                        <p>(516) 857-1733</p>
                        <h5>Email</h5>
                        <p>rekapallym@gmail.com</p>
                        <hr  style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className= 'resume-right-col' col= {8}>
                        <h2>Education</h2>
                        <Education 
                         startYear= {2017} 
                         endYear= {2019}
                         schoolName= 'New York Institute Of Technology'
                         schoolDiscription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                         />

                         <Education 
                         startYear= {2012} 
                         endYear= {2016}
                         schoolName= 'National Institute Of Technology'
                         schoolDiscription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                         />   

                         <hr style = {{borderTop: '3px solid #e22947'}} />   
                         <h2>Experience</h2>   
                         <Experience 
                         startYear = {'Sep ' +2018}
                         endYear = {'Present'}
                         jobName = 'NYIT College Of Health Sciences'
                         jobDiscription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                         />   

                         <Experience 
                         startYear = {'May ' + 2018}
                         endYear = {'Sep ' +2018}
                         jobName = 'NYIT College Of Osteopatic Medicine'
                         jobDiscription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                         /> 
                         <hr style = {{borderTop: '3px solid #e22947'}} /> 
                         <h2>Skills</h2>
                         <Skills  skill= "JavaScript" 
                         progress = {100}/>
                         <Skills  skill= "HTML/CSS  " 
                         progress = {100}/>
                         <Skills  skill= "React "
                         progress = {75}/>
                         <Skills  skill= "Node Js" 
                         progress = {70}/>
                    </Cell> 
                </Grid>
            </div>
            
         )

    }
}
 
export default Resume;