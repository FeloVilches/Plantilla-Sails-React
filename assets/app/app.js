import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Componente1 from './componente1';
import Componente2 from './componente2';
import Chat from './chat';

import Pagina1 from './paginas/pagina1';
import Pagina2 from './paginas/pagina2';
import Pagina3 from './paginas/pagina3';


class Layout extends React.Component {

	constructor(props){
		super(props);
	}
    
    render() {
        return(
        	<div>       	
				<div>
					<ul>
						<li><Link to="/spa">Pagina 1</Link></li>
						<li><Link to="/spa/pagina2">Pagina 2</Link></li>
						<li><Link to="/spa/pagina3/123456">Pagina 3</Link></li>
					</ul>

					<hr />

					<Switch>
						<Route exact path="/spa" component={Pagina1} />
						<Route path="/spa/pagina2" render={() => (<Pagina2 a={4} b={6}/>)} />
						<Route path="/spa/pagina3/:parameter" component={Pagina3} />
					</Switch>
				</div>

				<hr />

	        	<div>
	            	<h2>Componente principal (app.js)</h2>
	            	<Componente1/>
	            	<Componente2 var1="valor var 1 (dado por mi)"/>
	            	<Chat/>            	
	            </div>
            </div>            
        );
    }    
}




const app = document.getElementById("app");

ReactDOM.render(<BrowserRouter><Layout/></BrowserRouter>, app);
