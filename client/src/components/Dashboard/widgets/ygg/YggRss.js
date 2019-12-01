import React, {useEffect, useState} from 'react';
import YggItem from "./YggItem";
import * as Caller from "../../../../services/Caller";
import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import DragHandle from "../../DragHandle";
import {sortableHandle} from "react-sortable-hoc";

export default function YggRss() {

    const [content, setContent] = useState([]);

    const getRssFeed = () => {
        Caller.api('/ygg/rss')
            .then((res) => {
                const items = res.data.map(i => {
                    return <YggItem key={i.guid} item={i}/>
                });
                setContent(items);
            });
    };

    useEffect(getRssFeed, []);

    const DragHandle = sortableHandle(() => <i className="fas fa-arrows-alt"/>);

    return (
            <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                    <Row>
                        <DragHandle/>
                        <div className="col">
                            <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                YggRss :
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                            <span className="text-nowrap">{content}</span>
                          </span>
                        </div>
                        <Col className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                <img src="https://png2.cleanpng.com/sh/4f8b5af772b48df9ab918f8f83db11e0/L0KzQYm3V8E6N5hrj5H0aYP2gLBuTfxwb5Cye9H2cIX3dcO0ifNwdqQye95ycD3kgsW0lBhqfJYygNN9LXjkc7zskr1qa5DzRadrNUC0QYPoUshkbpM9RqICN0W1SIW3UcU0OWo8S6s8MEG5R4O1kP5o/kisspng-logo-computer-icons-clip-art-white-hat-hacker-icon-5b50112a28cfb8.0775284015319739301672.png"/>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
}
