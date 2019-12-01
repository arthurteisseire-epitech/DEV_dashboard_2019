import React, {useEffect, useState} from 'react';
import * as Caller from "../../../services/Caller";
import {Card, CardBody, CardTitle, Row, Col} from "reactstrap";
import {sortableHandle} from "react-sortable-hoc";


export default function Weather(props) {

    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState("");
    const [imageId, setImageId] = useState("https://cdn.icon-icons.com/icons2/935/PNG/512/sun-day-weather-symbol_icon-icons.com_73146.png");
    const [loaded, setLoad] = useState(false);
    const [cityName, setCityName] = useState("");

    useEffect(() => {
        Caller.api('/weather/city')
            .then((res) => {
                const data = res.data;
                setTemp(data.main.temp - 273.15);
                setDescription(data.weather[0].description);
                setImageId('http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
                setCityName(data.name);
                console.log(data)
            });
    });

    if (!loaded) {
        setLoad(true);

    }

    const DragHandle = sortableHandle(() => <i className="fas fa-arrows-alt"/>);

    return (
        <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
                <Row>
                    <DragHandle/>
                    <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                            Weather {cityName}
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                            <span className="text-nowrap">{description}</span>
                          </span>
                    </div>
                    <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <img src={imageId}/>
                        </div>
                    </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="mr-2">
                          <i className="fas"/> {temp.toFixed(2)} °C
                        </span>{" "}
                </p>
            </CardBody>
        </Card>
    );
}