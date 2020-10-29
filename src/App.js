import React, {useEffect} from "react";
import './App.css'

const App = () => {

  useEffect(() => {
        window.addEventListener('scroll', () => {
      let elem = document.getElementById('keyvisual');
      let scrollY = window.scrollY/10;
      elem.style.backgroundSize = scrollY + '%';
    });
    return () => {


      
    }
  }, [])

  return(
    <div>
      <body>
        <div className="block block-one">
          <p>One</p>
        </div>
        <div className="block2 block-two">
          <p>Two</p>
        </div>
        <div className="block block-three">
          <p>Three</p>
        </div>
        <div className="block block-four">
          <p>Four</p>
        </div>
        <div id="keyvisual" className="block block-five">
          <p>Five</p>
        </div>
        <div className="block block-six">
          <p>Six</p>
        </div>
      </body>
    </div>

  )
}

export default App;


