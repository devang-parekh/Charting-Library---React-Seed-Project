import configs from "../../../configs/ui.js"

import MenuSelect from '../Menus/MenuSelect'

const Periodicity = (props) => {
	let label = getOptionLabel(props.ciq.layout);

	return (
		<MenuSelect options={configs.periodicity.options} keyName='period' name='label' handleOptionSelect={props.setPeriodicityWithLoader} menuId='periodicitySelect' title={label} />
	);
}

//private
function getOptionLabel(layout) {

	var text = "";
	var periodicity = layout.periodicity, interval = layout.interval, timeUnit = layout.timeUnit;
	if (isNaN(interval)) {
		timeUnit = interval;
		interval = 1;
	}
	periodicity *= interval;
	text = periodicity;
	if (timeUnit == "day") {
		text += "D";
	} else if (timeUnit == "week") {
		text += "W";
	} else if (timeUnit == "month") {
		text += "M";
	} else if (timeUnit == "tick") {
		text += "T";
	} else if (timeUnit == "second") {
		text += "s";
	} else if (timeUnit == "millisecond") {
		text += "ms";
	} else if (periodicity >= 60 && periodicity % 15 === 0) {
		text = periodicity / 60 + "H";
	} else {
		text += "m";
	}
	return(text);

}

export default Periodicity
