import React from "react";
import { Col, Row, Button, Label } from 'reactstrap'

export default function PersonCard({ name }) {
    return (
        <Row>
            <Col
                md='11'
                style={{backgroundColor:'#fff'}} >
                <Label>NOME</Label>
            </Col>
            <Col md='1'>
                <Button
                    color="danger"
                    block
                    className="deleteButton">
                    Delete
                </Button>
            </Col>
        </Row>
    )
}