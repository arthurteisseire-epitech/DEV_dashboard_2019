import React, {useState} from 'react';
import Title from '../custom-component/Title';
import ApiWeatherGetInfoFromCity from '../serviceApi/WeatherApi'
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


export default function Weather(props) {

    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState("");
    const [loaded, setLoaded] = useState(false);

    const update = (cityname) => {
        ApiWeatherGetInfoFromCity(cityname).then((data) => {
            setTemp(data.main.temp - 273.15);
            setDescription(data.weather[0].description);
            setLoaded(true)
        });
    };

    return (
        <React.Fragment>
            <Title>Weather</Title>
            <Input
                onChange={event => update(event.target.value)}
                placeholder="Placeholder"
                inputProps={{
                    'aria-label': 'description',
                }}
            />
            <Title> {temp.toFixed(2)}°C </Title>
            <Title> {description} </Title>
        </React.Fragment>
    );
}
