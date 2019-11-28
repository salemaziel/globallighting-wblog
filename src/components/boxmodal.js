import React from 'react';
import SkyLight from 'react-skylight';
import Button from '../components/button'


class Modalbutton extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <Button prefetch primary onClick={() => this.animated.show()}>Learn More</Button>
        </section>
        <SkyLight 
          hideOnOverlayClicked 
          ref={ref => this.animated = ref} 
          title="Global Lighting Project"
          transitionDuration={300} 
        >
          Coming Soon!
        </SkyLight>
      </div>
    )
  }
}

Modalbutton.displayName = 'Modalbutton';

export default Modalbutton;