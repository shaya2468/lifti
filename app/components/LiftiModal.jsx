import React from 'react';
import ReactDOM from 'react-dom';
var {connect} = require('react-redux');
class LiftiModal extends React.Component {

	static propTypes = {
		isModalOpen: React.PropTypes.bool.isRequired,
		closeModal: React.PropTypes.func.isRequired,
		style: React.PropTypes.shape({
			modalStyle
		})
	};

	constructor(props) {
		super(props);

		this.outerStyle = {
			position: 'fixed',
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			height: "100%",
			zIndex: 1
		};

		// default style
		this.style = {
			modal: {
				position: "relative",
				width: 500,
				padding: 50,
				boxSizing: 'border-box',
				backgroundColor: '#fff',
				margin: '40vh auto',
				borderRadius: 3,
				zIndex: 2,
				textAlign: 'left',
				boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
				
			},
			overlay: {
				position: 'fixed',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				width: "100%",
				height: "100%",
				backgroundColor: 'rgba(0,0,0,0.5)',

			}
		}
	}

	// render modal
	render() {
		return (<div style={{...this.outerStyle, display: this.props.isModalOpen ? 'block' : 'none'}}>
						<div style={this.style.overlay} onClick={this.props.closeModal}></div>
												<div onClick={this.props.closeModal}></div>
                <div style={this.style.modal}>
                    {this.props.children}
                </div>
            </div>)
	}
}

// overwrite style
const modalStyle = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0,0.5)'
	}
};

const mainStyle = {
	app: {
		margin: '120px 0'
	},
	button: {
		backgroundColor: '#408cec',
		border: 0,
		padding: '12px 20px',
		color: '#fff',
		margin: '0 auto',
		width: 150,
		display: 'block',
		borderRadius: 3
	}
};

export default connect()(LiftiModal);
