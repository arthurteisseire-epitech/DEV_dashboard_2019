import React, {useState} from "react";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import * as Caller from '../../../../../services/Caller';
import {sortableHandle} from "react-sortable-hoc";
import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";

export default function YoutubeReader(props) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videoSearch = (term) => {
        Caller.api('/youtube/reader')
            .then((res) => {
                const data = res.data;
                setVideos(data);
                setSelectedVideo(data[0]);
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
                            Youtube feed :
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                            <span className="text-nowrap">
                                <SearchBar onSearchTermChange={videoSearch}/>
                                <VideoDetail video={selectedVideo}/>
                                <VideoList
                                    onVideoSelect={setSelectedVideo}
                                    videos={videos}
                                />
                            </span>
                          </span>
                    </div>
                    <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <img src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png"/>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
