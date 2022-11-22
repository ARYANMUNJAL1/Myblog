import React from 'react'
import {Link} from 'react-router-dom';
import './nav.css';
export default function Nav() {
  return (
    <>
    <div class="main">
     <div id="head">
             
             <div id="head1">The</div>

            <div id="head2">Siren</div>
       </div>

         <div id="navbar">

             <div id="nav1">
             <Link to ="home">Home</Link>
            
              </div>

             <div id="nav2">
             <Link to ="Bollywood">Bollywood</Link>
              </div>

             <div id="nav3">
             <Link to ="Technology">Technology</Link> 
              </div>

             <div id="nav4">
             <Link to ="Fitness">Fitness</Link>
              </div>

             <div id="nav4">
             <Link to ="Hollywood">Hollywood</Link>
              </div>

             <div id="nav6">
             <Link to ="Food">Food</Link>
              </div>

          </div>

       <hr></hr>

       </div>

    </>
  )
}
