import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(){
        super()
        this.state ={
            activeTab:0
        }
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fdab1nmslvvntp.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F02%2F1487315815react.png&f=1) center / cover'}}>Welcome</CardTitle>
                      <CardText>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               Mauris sagittis pellentesque lacus eleifend lacinia...
                       </CardText>
                       <CardActions border>
                            <Button href='http://google.com' target= '_blank' colored>Get Started</Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
                 </Card>
            )
        } else if(this.state.activeTab === 1){
            return (<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://dev.solace.com/wp-content/uploads/2015/07/javascript-logo-whitebg.png) center / cover'}}>Welcome</CardTitle>
              <CardText>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Mauris sagittis pellentesque lacus eleifend lacinia...
               </CardText>
               <CardActions border>
                    <Button href='http://google.com' target= '_blank' colored>Get Started</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
         </Card>)
        }else if(this.state.activeTab === 2){
            return (<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F0f%2F8b%2F28%2F0f8b2870896edcde8f6149fe2733faaf.jpg&f=1) center / cover'}}>Welcome</CardTitle>
              <CardText>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Mauris sagittis pellentesque lacus eleifend lacinia...
               </CardText>
               <CardActions border>
                    <Button href='http://google.com' target= '_blank' colored>Get Started</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
         </Card>)
        }
    }
    render() { 
        return ( <div className='category-tabs'>
            <Tabs activeTab= {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple >
                <Tab>React</Tab>
                <Tab>JavaScript</Tab>
                <Tab>HTML/CSS</Tab>
            </Tabs>
            
                <Grid className= 'category-toggle'>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            

        </div> );
    }
}
 
export default Projects;