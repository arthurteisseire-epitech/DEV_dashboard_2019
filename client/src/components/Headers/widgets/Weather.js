import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import ApiCall from "../../../services/ApiCall";
import {Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";


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

    return (
        <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
                <Row>
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


// return (
//     <Card className="card-stats mb-4 mb-xl-0">
//         <CardBody>

//             <Input
//                 onChange={event => update(event.target.value)}
//                 placeholder="City Name"
//                 inputProps={{
//                     'aria-label': 'description',
//                 }}
//             />
//             {temp.toFixed(2)}°C
//             <Typography component="h3"> Description : {description} </Typography>
//         </CardBody>
//     </Card>
// );
