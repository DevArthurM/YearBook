import React, { useState, useEffect } from "react";
import { Col, Row, Button, Input } from 'reactstrap'
import PersonCard from "../PersonCard/PersonCard";

export default function List() {
    const [newBrief, setNewBrief] = useState(null)
    const [newName, setNewName] = useState(null)
    const [deleteUserId, setDeleteUserId] = useState(null)
    const [allUsers, setAllUsers] = useState(null)
    const URL= "http://localhost:3000/"
    //-----------------------------------------------------------------------------------------------------------------
    let newUser = {
        name: newName,
        brief: newBrief
    }
    let deleteBody = {
        id: deleteUserId
    }
    //-----------------------------------------------------------------------------------------------------------------
    async function getAllUsers() {
        const response = await fetch(URL+"getUser", {
            method: "GET"
        })
        const body = await response.json();
        setAllUsers(body)
        console.log("getAllUsers")
    }
    async function insertUser(name, brief) {
        const response = await fetch(URL+"insertUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
        const body = await response.json();
        console.log("body", body)
        setAllUsers((previousState) => ({
            ...previousState,
            body
        }))
        //await getAllUsers()console.log("insertUser")
    }

    async function deleteUser() {
        const response = await fetch(URL+"deleteUser", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(deleteBody)
        })
        await getAllUsers()
        console.log("deleteUser")
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    //-----------------------------------------------------------------------------------------------------------------
    return (
        <>
            <Row style={{ padding: '2vw' }}>
                <Col>
                    <Row>
                        {allUsers === null ?
                            <h1>loading</h1>
                            :
                            allUsers.map(user => {
                                return <PersonCard
                                    name={user.name}
                                    brief={user.brief}
                                    id={user.id}
                                    setId={setDeleteUserId}
                                    deleteUser={deleteUser} />
                            })}
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col
                                    md='11'>
                                    <Input
                                        placeholder="Name"
                                        value={newName}
                                        onChange={(event) => { setNewName(event.target.value) }} />
                                </Col>
                                <Col
                                    md='1'>
                                    <Button
                                        block
                                        onClick={() => {
                                            insertUser(newName, newBrief)
                                            
                                        }}
                                        color="success">
                                        Enviar
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input
                                        type="textarea"
                                        value={newBrief}
                                        onChange={(event) => { setNewBrief(event.target.value) }} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}