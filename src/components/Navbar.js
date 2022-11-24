import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {

	return (
		<>
		<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{color: props.mode === 'light' ? '#3b3e41' : 'white'}} >
			<a className="navbar-brand" href="#">{props.title}</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					{/* <li className="nav-item">
						<a className="nav-link" href="myapp\src\components\About.js">{props.aboutText}</a>
					</li> */}
				</ul>
				{/* <form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form> 	 */}
			</div>
			{/* <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>				
				<input className="custom-control-input" type="checkbox" onClick={props.toggleMode} role="switch" id="customSwitch1"/>
				<label className="custom-control-label" htmlFor="customSwitch1">Turn to {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
			</div> */}
			{/* According to bootstrap v4.6 */}

			<div className="btn-group" style={{color: props.mode === 'light' ? '#3b3e41' : 'white'}} role="group" aria-label="Basic mixed styles example">
				<button type="button" className="btn btn-primary" onClick={props.blueMode} >Dark Blue</button>
				<button type="button" className="btn btn-light" style={{backgroundColor: "#f5f5f5"}} onClick={props.lightMode}>Light Mode</button>
				<button type="button" className="btn btn-success" onClick={props.greenMode}>Dark Green</button>
			</div>
		</nav>
		</>
	)
}

Navbar.propTypes = {
	title: propTypes.string.isRequired,
	aboutText: propTypes.string.isRequired
}

Navbar.defaultProps = {
	title: 'Set title here',
	aboutText: 'About'
}