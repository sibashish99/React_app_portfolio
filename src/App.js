import React,{Component} from 'react';
import Projects from './Projects';
import SocialProfile from './SocialProfiles';
import profile from './assets/profile.jpg';



class App extends Component{
    state={displayBio: false};
    
  
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render (){ 
        return(
            <div>
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is Sibashish biswas. I am a Production and industrial Engineer.</p>
                <p>I am always looking forward to working on meaningful project.</p>
                {
                    this.state.displayBio ?(
                        <div>
                          <p>I live in India, and i code everyday</p>
                          <p>My favourate language is JavaScript,and i think React.js is awesome.</p>
                          <p>Besides coding , i also love music and playing cricket!</p>
                          <button onClick={this.toggleDisplayBi}>Show less</button>
                        </div>
                      ):(
                          <div>
                              <button onClick={this.toggleDisplayBi}>Read more</button>
                          </div>
                      )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfile />
            </div>
            
           
        )
    }
}
export default App;
