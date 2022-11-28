import { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useForm, Controller } from 'react-hook-form'
import TablaBiseccion from './TablaBiseccion'

function Biseccion() {
    const { control, handleSubmit } = useForm()
    const [tabla, setTabla] = useState()
    const [mostrarTabla, setMostrarTabla] = useState(false)

    const onSubmit = data => {
        setTabla(<TablaBiseccion info={data} />)
        setMostrarTabla(true)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                    <Controller
                        name='ecuacion'
                        control={control}
                        render={({ field }) => (
                            <Form.Group as={Col} controlId="ecuacion" {...field}>
                                <Form.Label>Ecuación</Form.Label>
                                <Form.Control placeholder="Ingrese la ecuación" />
                            </Form.Group>
                        )}
                    />
                </Row>

                <Row className="mb-3">
                    <Controller
                        name='cifras'
                        control={control}
                        render={({ field }) => (
                            <Form.Group as={Col} controlId="cifras" {...field}>
                                <Form.Label>Cifras</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        )}
                    />

                    <Controller
                        name='tolerancia'
                        control={control}
                        render={({ field }) => (
                            <Form.Group as={Col} controlId="tolerancia" {...field}>
                                <Form.Label>Tolerancia</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        )}
                    />
                </Row>

                <Row className="mb-3">
                    <h5>Intervalo</h5>
                    <Controller
                        name='x1'
                        control={control}
                        render={({ field }) => (
                            <Form.Group as={Col} controlId="x1" {...field}>
                                <Form.Label>x1</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        )}
                    />

                    <Controller
                        name='x2'
                        control={control}
                        render={({ field }) => (
                            <Form.Group as={Col} controlId="x2" {...field}>
                                <Form.Label>x2</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        )}
                    />
                </Row>

                <Row className="mb-3">
                    <h5>Continuidad</h5>
                    <Controller
                        name='desde'
                        control={control}
                        render={({ field }) => (
                            <Form.Group as={Col} controlId="desde" {...field}>
                                <Form.Label>Desde</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        )}
                    />

                    <Controller
                        name='hasta'
                        control={control}
                        render={({ field }) => (
                            <Form.Group as={Col} controlId="hasta" {...field}>
                                <Form.Label>Hasta</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        )}
                    />
                </Row>

                <Button variant="primary" type="submit">
                    Calcular
                </Button>
            </Form>

            {mostrarTabla && tabla}
        </div>
    )
}

export default Biseccion