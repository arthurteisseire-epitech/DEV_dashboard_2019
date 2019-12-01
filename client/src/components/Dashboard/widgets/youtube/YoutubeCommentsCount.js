import React, {useState, useEffect} from "react";
import * as Caller from '../../../../services/Caller';
import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import DragHandle from "../../DragHandle";
import {sortableHandle} from "react-sortable-hoc";

export default function YoutubeCommentCount(props) {
    const [nbComments, setNbComments] = useState(0);

    useEffect(() => {
        Caller.api('/youtube/video')
            .then((res) => {
                const data = res.data;
                setNbComments(data[0].statistics.commentCount);
            });
    });

    const DragHandle = sortableHandle(() => <i className="fas fa-arrows-alt"/>);

    return (
        <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
                <Row>
                    <DragHandle/>
                    <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                            Youtube comment count :
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                            <span className="text-nowrap">{nbComments} Comments</span>
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
