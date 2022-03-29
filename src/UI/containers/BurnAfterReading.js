/**
 * 拖动滑动条设置阅后即焚的时间
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from '';
import { switchBurnAfterReading, setBurnAfterReadingTime } from '../../redux/actions/index';

class BurnAfterRead extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sliderValue: 0,
			timeString: 'OFF'
		};

		this.setSliderValue = this.setSliderValue.bind(this);
		this.showTimeString = this.showTimeString.bind(this);
		this.burnAfterReadingVerdict = this.burnAfterReadingVerdict.bind(this);
	}

	setSliderValue(sliderValue) {
		this.setState({
			sliderValue
		});
	}

	showTimeString(timeString) {
		this.setState({
			timeString
		});
	}

	burnAfterReadingVerdict(event) {
		// const ifBurn = this.props.burned;
		// this.setState({
		//	 sliderValue: event.target.value
		// });

		switch (event.target.value) {
			case '0':
				this.setSliderValue(0);
				this.showTimeString('OFF');
				this.props.switchBurnAfterReading(false);
				this.props.setBurnAfterReadingTime(0);
				break;
			case '1':
				this.setSliderValue(1);
				this.showTimeString('5s');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(5000);
				break;
			case '2':
				this.setSliderValue(2);
				this.showTimeString('10s');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(10000);
				break;
			case '3':
				this.setSliderValue(3);
				this.showTimeString('30s');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(30000);
				break;
			case '4':
				this.setSliderValue(4);
				this.showTimeString('1min');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(60000);
				break;
			case '5':
				this.setSliderValue(5);
				this.showTimeString('5min');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(300000);
				break;
			case '6':
				this.setSliderValue(6);
				this.showTimeString('10min');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(600000);
				break;
			case '7':
				this.setSliderValue(7);
				this.showTimeString('30min');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(1800000);
				break;
			case '8':
				this.setSliderValue(8);
				this.showTimeString('1h');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(3600000);
				break;
			case '9':
				this.setSliderValue(9);
				this.showTimeString('6h');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(21600000);
				break;
			case '10':
				this.setSliderValue(10);
				this.showTimeString('12h');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(43200000);
				break;
			case '11':
				this.setSliderValue(11);
				this.showTimeString('1d');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(86400000);
				break;
			case '12':
				this.setSliderValue(12);
				this.showTimeString('1w');
				this.props.switchBurnAfterReading(true);
				this.props.setBurnAfterReadingTime(604800000);
				break;
			default:
				console.log('Err');
				break;
		}
	}

	render() {
		return (
			<>
				BurnTime: {this.state.timeString}<br />
				<input
					type="range"
					min={0}
					max={12}
					// defaultValue={0}
					value={this.state.sliderValue}
					onChange={this.burnAfterReadingVerdict} />
			</>
		);
	}
}

const mapStateToProps = state => ({
	burned: state.burnAfterReading.burned,
	burnTime: state.burnAfterReading.burnTime
});

const mapDispatchToProps = dispatch => {
	return {
		switchBurnAfterReading: burned => {dispatch(switchBurnAfterReading(burned));},
		setBurnAfterReadingTime: burnTime => {dispatch(setBurnAfterReadingTime(burnTime));}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BurnAfterRead);
