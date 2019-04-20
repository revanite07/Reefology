import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';


import Parameters from '../Parameters';
class Swing extends Component {
  
    render() {
        return (
            <div>
                
             
                <Parallax
                    blur={10}
                    bgImage={require('./images/japancityscape.jpg')}
                    bgImageAlt="the cat"
                    strength={200}
                >
                    <div className='header-content'>
                       <h1 className='header-name'>Reefology</h1>
                       <h3 className='header-title'>Helping reefs thrive...</h3>
                    </div>
                    <div style={{ height: '100px' }} />
                </Parallax>
               <div className="about-content"><Parameters/></div>
              
                <Parallax
                    
                    bgImage={require('./images/trafficblur2.jpg')}
                    bgImageAlt="tokyo"
                    strength={-200}
                >
                  
            <div style={{ height: '400px' }} />
                </Parallax>

              
              
              
                <Parallax
                    bgImage={'/path/to/another/image'}
                    strength={400}
                    renderLayer={percentage => (
                        <div
                            style={{
                                position: 'absolute',
                                background: `rgba(255, 125, 0, ${percentage * 1})`,
                                left: '50%',
                                bottom: '50%',
                                width: percentage * 500,
                                height: percentage * 500,
                            }}
                        />
                    )}
                >
                    <div className="card-content">
                      
                    </div>
                </Parallax>
            </div>
        );
    }
}
export default Swing;
                  