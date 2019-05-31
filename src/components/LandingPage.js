import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';



class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style = {{width:'100%', margin: 'auto'}}>
            <Grid className="LandingGrid">
             <Cell col={12}>
                 <img src = 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Favatars-21%2F512%2Favatar-circle-human-male-black-7-512.png&f=1'
                 alt= 'avatar'
                 className= 'avatar-img'>
                 </img>
                 <div className= 'banner-text'>
                     <h1>Web developer</h1>
                     <hr />
                     <p>HTML5 | CSS | Bootstarp | JavaScript | React | NodeJS | Express JS | SQL</p>
                     <div className= 'social-links'>

                         <a href= 'https://www.linkedin.com/in/venkata-rekapally-8049b1136/r' target= '_blank' rel = 'noopener noreferrer '>
                        <i class="fa fa-linkedin-square" aria-hidden ="true"></i></a>

                        <a href= 'https://github.com/rekapallym' target= '_blank' rel = 'noopener noreferrer '>
                        <i class="fa fa-github-square" aria-hidden ="true"></i></a>

                       

                        <a href= 'https://www.facebook.com/mani.mustangs' target= '_blank' rel = 'noopener noreferrer '>
                        <i class="fa fa-facebook-square" aria-hidden ="true"></i></a>

                     </div>
                 </div>
             </Cell>
            </Grid>

            </div>
         );
    }
}
 
export default LandingPage;