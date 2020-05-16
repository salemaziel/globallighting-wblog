import React from 'react'
//import { render } from 'react-dom'

import './modalpics101b.css'
//const modalpics101b = document.getElementById('modalpics101b');
const data = [{
	id: 1,
	name: "Island",
	image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1585214592/glp/whiteled/1bodylightfront_ul6z5v.jpg"
}, {
	id: 2,
	name: "Forest",
	image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1585214593/glp/whiteled/5indoorESLsolarLED_chbezu.jpg"
}, {
	id: 3,
	name: "Whale",
	image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1585214593/glp/whiteled/6indoor_a9h2hu.jpg"
}, {
	id: 4,
	name: "Mountain",
	image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1585214593/glp/whiteled/7.5solar_ntmu2h.jpg"
}, {
	id: 5,
	name: "Boat",
	image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1585214595/glp/whiteled/7indoor_rwtulw.jpg"
}, {
	id: 6,
	name: "Flowers",
	image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1585214595/glp/whiteled/8IMG1860_woznjw.jpg"
}, {
	id: 7,
	name: "Fire",
	image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1585214592/glp/whiteled/10IMG1862_gbjzus.jpg"
}, {
	id: 8,
	name: "Garden",
	image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1585214592/glp/whiteled/11IMG1867_yephz8.jpg"
}, 
];


class Tiles extends React.Component {
	render() {
		// Create tile for each item in data array
		// Pass data to each tile and assign a key
		return (
			<div className="tiles">
				{this.props.data.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
			</div>
		);
	}
}

class Tile extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				open: false,
				mouseOver: false
			};
			// Bind properties to class instance
			this._clickHandler = this._clickHandler.bind(this);
			this._mouseEnter = this._mouseEnter.bind(this);
			this._mouseLeave = this._mouseLeave.bind(this);
		}
		// Event handlers to modify state values
	_mouseEnter(e) {
		e.preventDefault();
		if (this.state.mouseOver === false) {
			console.log(this.props.data.name);
			this.setState({
				mouseOver: true
			})
		}
	}
	_mouseLeave(e) {
		e.preventDefault();
		if (this.state.mouseOver === true) {
			this.setState({
				mouseOver: false
			})
		}
	}
	_clickHandler(e) {
		e.preventDefault();
		if (this.state.open === false) {
			this.setState({
				open: true
			});
		} else {
			this.setState({
				open: false
			});
		}
	}

	render() {
		// Modify styles based on state values
		let tileStyle = {};
		// When tile clicked
		if (this.state.open) {
			tileStyle = {
				width: '100vw',
				height: '100vh',
				position: 'absolute',
				top: '0%',
				left: '0%',
				margin: '0',
				/*marginTop: '-31vw',
				marginLeft: '-31vw',*/
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			tileStyle = {
				width: 'auto',
				height: 'auto'
			};
		}

		return (
			<div className="tile">
				<img
					onMouseEnter={this._mouseEnter}
					onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
					src={this.props.data.image}
					alt={this.props.data.name}
					style={tileStyle}
				/>
			</div>
		);
	}
}

//ReactDOM.render(
//	<Modalpics101b data={data} />,
//	modalpics101b
//);

class Modalpics101b extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
        };
	render() {

		return (
			<Tiles data={data} />
		);
	}
}

export default Modalpics101b