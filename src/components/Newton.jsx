import { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useForm, Controller } from 'react-hook-form'
import TablaNewton from './TablaNewton'

function Newton() {
    const { control, handleSubmit } = useForm()
    const [campos, setCampos] = useState({})
    const [mostrarTabla, setMostrarTabla] = useState(false)

    const onSubmit = data => {
        setCampos(data)
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

                <Button variant="primary" type="submit">
                    Calcular
                </Button>
            </Form>

            {mostrarTabla && <TablaNewton info={campos} />}
        </div>
    )
}

export default Newton