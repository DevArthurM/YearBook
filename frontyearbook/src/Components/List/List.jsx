import React from "react";
import { Col, Row, Button, Input } from 'reactstrap'
import PersonCard from "../PersonCard/PersonCard";

export default function List() {
    return (
        <Row style={{ padding: '2vw' }}>
            <Col>
                <Row style={{ height: '25%',overflow: 'scroll'}}>
                    <PersonCard />
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Input type="textarea" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md='11'>
                                <Input
                                    placeholder="Name">
                                </Input>
                            </Col>
                            <Col md='1'>
                                <Button
                                    block
                                    color="success"> Enviar </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}