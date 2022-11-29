import axios from 'axios'
import { Container, Table, Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function TablaNewton({ info }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        var request = ""
        if (info.tolerancia === "" || info.tolerancia === undefined) {
            request = `http://127.0.0.1:8000/newton?ecuacion=${info.ecuacion}`
        } else {
            request = `http://127.0.0.1:8000/newton?ecuacion=${info.ecuacion}&tolerancia=${info.tolerancia}`
        }
        axios.get(request)
            .then((response) => {
                setIsLoaded(true)
                setError(null)
                setData(response.data)
            })
            .catch(error => {
                setIsLoaded(true)
                setError(error)
            })
        // eslint-disable-next-line
    }, [info])

    if (!isLoaded) return <Spinner animation="border" />
    return (
        <Container>
            <h3>Algoritmo de la Newton</h3>
            <Table striped bordered hover size='sm' variant='dark' responsive>
                <thead>
                    <tr>
                        <th>x</th>
                        <th>Iteracción</th>
                        <th>error</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        error === null ?
                            data.map((n => (
                                <tr key={n["iteracion"]}>
                                    <td>{n["x"]}</td>
                                    <td>{n["iteracion"]}</td>
                                    <td>{n["error"].toFixed(2)}%</td>
                                </tr>
                            ))) :
                            <tr>
                                <td colSpan={8}>Error: {error.message}</td>
                            </tr>
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default TablaNewton
