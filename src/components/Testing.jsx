import React, { useEffect, useState } from "react";
import { useFaceDetection } from "react-use-face-detection";
import Webcam from "react-webcam";

function Testing(props) {
	// const [visible, setVisible] = useState(true);
	// const setRef = React.useRef(null);

	// useEffect(() => {
	// 	setInterval(toggleVisible, 3000);
	// }, [visible]);

	// const toggleVisible = () => {
	// 	setVisible(!visible);
	// };

	// console.log(visible);

	return <div>{visible && <Webcam audio={false} ref={webcamRef} />}</div>;
}

export default Testing;

// class WebcamToggle extends React.Component {
// 	// state = { visible: true };

// 	setRef = (webcam) => (this.webcam = webcam);

// 	componentDidMount() {
// 		setInterval(this.toggleVisible, 3000);
// 	}

// 	toggleVisible = () => this.setState((prev) => ({ visible: !prev.visible }));

// 	// render() {
// 	//   return (
// 	//     <div>

// 	//     </div>
// 	//   );
// 	// }
// }

// ReactDOM.render(<WebcamToggle />, document.getElementById("root"));
