import React, { Component } from 'react';
import Home from './home';
import Resume from './resume';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import MyNav from './mynav';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <div className="home-components"><Home /></div>    
            );
        };
        return(
            <div>
                <MyNav />
                <TransitionGroup>
                    <CSSTransition classNames="page" timeout={300}>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/projects' component={Projects} />
                        <Route exact path='/resume' component={Resume} />
                        <Route exact path='/contact' component={Contact} />
                        <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
        
    }
}

export default Main;















































































































































