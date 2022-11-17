import axios from 'axios'
import { Container, Table, Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function Tabla({ info }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.log(info)
        axios.get(`http://127.0.0.1:8000/biseccion?ecuacion=${info.ecuacion}`)
            .then((response) => {
                setIsLoaded(true)
                setData(response.data)
            })
            .catch(error => {
                setIsLoaded(true)
                setError(error)
            })
        // eslint-disable-next-line
    }, [])
    if (error) return <div>Error: {error.message}</div>
    if (!isLoaded) return <Spinner animation="border" />
    if (!data) return <div>Nada</div>

    return (
        <Container>
            <h3>Algoritmo de la Bisección</h3>
            <Table striped bordered hover size='sm' variant='dark' responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>x1</th>
                        <th>x2</th>
                        <th>f(x1)</th>
                        <th>f(x2)</th>
                        <th>m</th>
                        <th>f(m)</th>
                        <th>error</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        error === null ?
                            data.map((n => (
                                <tr key={n["iteracion"]}>
                                    <td>{n["iteracion"]}</td>
                                    <td>{n["x1"]}</td>
                                    <td>{n["x2"]}</td>
                                    <td>{n["fx1"]}</td>
                                    <td>{n["fx2"]}</td>
                                    <td>{n["m"]}</td>
                                    <td>{n["fm"]}</td>
                                    <td>{n["error"]}%</td>
                                </tr>
                            ))) :
                            console.log(error)
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Tabla
