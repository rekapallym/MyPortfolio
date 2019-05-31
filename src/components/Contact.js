import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    state = {  }
    render() { 
        return (
            <div className="contact-body">
            <Grid className= 'contact-grid'>
                <Cell col={6} >
                   <h2>Venkata Rekapally</h2>
                   <img src= 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Favatars-21%2F512%2Favatar-circle-human-male-black-7-512.png&f=1' 
                   alt= 'ven-avatar' style = {{ height:'250px'}}/>
                  <p styyle= {{width:'75px', margin:'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Cell>
                <Cell col={6} >
                <h2>Contact Me</h2>
                <hr/>
                <div className= 'contact-list'>
                 <List>
                   <ListItem>
                      <ListItemContent style= {{fontSize: '30px', fontFamily: 'Anton'}}> 
                      <i className= "fa fa-phone-square" aria-hidden= "true"></i>
                      (516) 857-1733</ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style= {{fontSize: '30px', fontFamily: 'Anton'}}> 
                      <i className= "fa fa-envelope" aria-hidden= "true"></i>
                      rekapallym@gmail.com</ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style= {{fontSize: '30px', fontFamily: 'Anton'}}> 
                      <i className= "fa fa-skype" aria-hidden= "true"></i>
                      My Skype ID</ListItemContent>
                    </ListItem>
                    </List>
                </div>

                </Cell>
            </Grid>
            </div>
         );
    }
}
 
export default Contact;