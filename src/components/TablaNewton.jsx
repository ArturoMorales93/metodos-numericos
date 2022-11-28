import axios from 'axios'
import { Container, Table, Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function TablaNewton({ info }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.log(info)
        axios.get(`http://127.0.0.1:8000/newton`)
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
                            console.log(error)
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default TablaNewton
