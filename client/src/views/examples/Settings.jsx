/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect, useState} from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    Container,
    Row,
} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Caller from "../../services/Caller";
import Cookies from "js-cookie";
import {toast} from "react-toastify";
// core components

export default function Settings() {

    function handleSubmit(event) {
        event.preventDefault();
        Caller.update({
            cityname: event.target.weatherCity.value,
            youtube_term: event.target.youtubeVideos.value,
            ygg_n: event.target.ygg_id.value,
            youtube_video_id: event.target.youtube_video_id.value,
        }).then((response) => {
            window.location = "/admin/index";
        }).catch((err) => {
            toast.error('Something went wrong :' + err);
        });
    }

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(value);
    }

    return (
        <>
            <Container className="mt-7">
                {/* Dark table */}
                <Row className="mt-5">
                    <div className="col">
                        <Card className="bg-default shadow">
                            <CardHeader className="bg-transparent border-0">
                                <h3 className="text-white mb-0">Widget Settings</h3>
                            </CardHeader>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="weatherCity"
                                    label="Weather City"
                                    name="weatherCity"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="youtubeVideos"
                                    label="Youtube Search"
                                    id="youtubeVideos"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="youtube_video_id"
                                    label="Youtube video id"
                                    id="youtubeVideoId"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="ygg_id"
                                    label="Ygg feed ID"
                                    id="ygg_id"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Set Settings
                                </Button>
                            </form>
                            {/*<form onSubmit={handleSubmit}>*/}
                            {/*    <label>*/}
                            {/*        Weather City:*/}
                            {/*        <input*/}
                            {/*            name="weatherCity"*/}
                            {/*            type="text"*/}
                            {/*            checked={weatherCity}*/}
                            {/*            onChange={handleInputChange}/>*/}
                            {/*    </label>*/}
                            {/*    <br/>*/}
                            {/*    <label>*/}
                            {/*        Youtube Videos:*/}
                            {/*        <input*/}
                            {/*            name="youtubeVideos"*/}
                            {/*            type="text"*/}
                            {/*            value={youtubeVideos}*/}
                            {/*            onChange={handleInputChange}/>*/}
                            {/*    </label>*/}
                            {/*    <br/>*/}
                            {/*    <input type="submit" value="Submit"/>*/}
                            {/*</form>*/}
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}
