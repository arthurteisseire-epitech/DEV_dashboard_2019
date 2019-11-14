import React, {useState} from 'react';
import Input from '@material-ui/core/Input';
import {Card, CardBody, CardTitle, Row, Col} from "reactstrap";
import {sortableHandle} from "react-sortable-hoc";
import ApiCall from "../../../services/ApiCall";


export default function Weather(props) {

    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState("");

    const update = (cityname) => {
        ApiCall('/weather/city', {cityname: cityname}).then((res) => {
            const data = res.data;
            console.log(data);
            setTemp(data.main.temp - 273.15);
            setDescription(data.weather[0].description);
        });
    };

    const DragHandle = sortableHandle(() => <i className="fas fa-arrows-alt"/>);

    return (
        <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
                <Row>
                    <DragHandle/>
                    <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                            Weather
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                            <Input
                                onChange={event => update(event.target.value)}
                                placeholder="City Name"
                                inputProps={{
                                    'aria-label': 'description',
                                }}
                            />
                          </span>
                    </div>
                    <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-cloud"/>
                        </div>
                    </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="mr-2">
                          <i className="fas"/> {temp.toFixed(2)} °C
                        </span>{" "}
                    <span className="text-nowrap">Description: {description}</span>
                </p>
            </CardBody>
        </Card>
    );
}