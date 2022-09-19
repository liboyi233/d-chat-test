/**
 * 拖动滑动条设置阅后即焚的时间
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from '';
import { setSlider, switchBurnAfterReading, setBurnAfterReadingTime } from '../../redux/actions/index';

// import { getTopicFromPathname } from 'Approot/misc/util';


class BurnAfterRead extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		//	// sliderValue: 0,
		//	timeString: 'OFF'
		// };

		// this.setSliderValue = this.setSliderValue.bind(this);
		// this.showTimeString = this.showTimeString.bind(this);
		this.burnAfterReadingVerdict = this.burnAfterReadingVerdict.bind(this);
		this.setBurnAfterReading = this.setBurnAfterReading.bind(this);
	}

	// setSliderValue(sliderValue) {
	//	 this.setState({
	//		 sliderValue
	//	 });
	// }

	// showTimeString(timeString) {
	//	this.setState({
	//		timeString
	//	});
	// }

	setBurnAfterReading(sliderValue, timeString, ifBurned, burnTime) {
		this.props.setSlider(sliderValue, timeString);
		// this.showTimeString(timeString);
		this.props.switchBurnAfterReading(ifBurned);
		this.props.setBurnAfterReadingTime(burnTime);
	}

	burnAfterReadingVerdict(event) {
		// const ifBurn = this.props.burned;
		// this.setState({
		//	 sliderValue: event.target.value
		// });

		switch (event.target.value) {
			case '0':
				this.setBurnAfterReading(0, 'OFF', false, 0);
				break;
			case '1':
				this.setBurnAfterReading(1, '5s', true, 5);
				break;
			case '2':
				this.setBurnAfterReading(2, '10s', true, 10);
				break;
			case '3':
				this.setBurnAfterReading(3, '30s', true, 30);
				break;
			case '4':
				this.setBurnAfterReading(4, '1min', true, 60);
				break;
			case '5':
				this.setBurnAfterReading(5, '5min', true, 300);
				break;
			case '6':
				this.setBurnAfterReading(6, '10min', true, 600);
				break;
			case '7':
				this.setBurnAfterReading(7, '30min', true, 1800);
				break;
			case '8':
				this.setBurnAfterReading(8, '1h', true, 3600);
				break;
			case '9':
				this.setBurnAfterReading(9, '6h', true, 21600);
				break;
			case '10':
				this.setBurnAfterReading(10, '12h', true, 43200);
				break;
			case '11':
				this.setBurnAfterReading(11, '1d', true, 86400);
				break;
			case '12':
				this.setBurnAfterReading(12, '1w', true, 604800);
				break;
			default:
				console.log('Err');
				break;
		}
	}

	render() {
		return (
			<>
				BurnTime: {this.props.timeString}<br />
				<input
					type="range"
					min={0}
					max={12}
					// defaultValue={0}
					value={this.props.sliderValue}
					// onBlur={this.burnAfterReadingVerdict} />
					onChange={this.burnAfterReadingVerdict} />
			</>
		);
	}
}

const mapStateToProps = state => {
	// const chatSettings = state.chatSettings;
	// console.log('chatSettings', chatSettings);
	// console.log('topic', topic);
	return ({
		sliderValue: state.burnAfterReading.sliderValue,
		timeString: state.burnAfterReading.timeString,
		burned: state.burnAfterReading.burned,
		burnTime: state.burnAfterReading.burnTime,
	});
};

const mapDispatchToProps = dispatch => {
	return {
		setSlider: (sliderValue, timeString) => {dispatch(setSlider(sliderValue, timeString));},
		switchBurnAfterReading: burned => {dispatch(switchBurnAfterReading(burned));},
		setBurnAfterReadingTime: burnTime => {dispatch(setBurnAfterReadingTime(burnTime));}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BurnAfterRead);
