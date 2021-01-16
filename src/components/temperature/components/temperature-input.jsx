function TemperatureInput(props) {
    let scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit',
    }
    function handleChange(e) {
        props.onTemperatureChange(e.target.value);
    }
    return (
        <div className="form-group">
            <label>Nhập vào nhiệt độ {scaleNames[props.scale]}</label>
            <input type="text" className="form-control" value={props.temperature} onChange={handleChange}/>
        </div>
    );
} 

export default TemperatureInput;