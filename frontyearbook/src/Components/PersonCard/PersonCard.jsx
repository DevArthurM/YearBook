import React from "react";
import { Col, Row, Button, Badge, Alert } from 'reactstrap'

export default function PersonCard({ name, brief, id, setId, deleteUser }) {
    return (
        <Row>
            <Col
                md='11'
                style={{ backgroundColor: '#fff' }} >
                <Row>
                    <Badge>
                        {name}
                    </Badge>
                </Row>
                <Row>
                    <Alert color="light">
                        {brief}
                    </Alert>
                </Row>
            </Col>
            <Col md='1' align='center'>
                <Row>
                    <Button
                        color="danger"
                        className="deleteButton"
                        onClick={() => {
                            setId(id)
                            deleteUser()
                        }
                        }>
                        Delete
                    </Button>
                </Row>
            </Col>
        </Row>
    )
}