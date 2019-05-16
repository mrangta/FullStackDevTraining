import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { format } from 'url';

const ShoppingForm = ({ addToList }) => {
    const [Form, setValues] = useState({
        type: "",
        count: 0,
        price: 0
    })

    const onChange = (event) => {
        setValues({
            ...format,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.prevent.default;
        addToList(form);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <label htmlFor="type">Item Type</label>
                <input type="text" name="type" onChange={onChange} value={form.type} />
            </Form.Field>
            <Form.Field>
                <label htmlFor="type">Count</label>
                <input type="text" name="count" onChange={onChange} value={form.count} />
            </Form.Field><Form.Field>
                <label htmlFor="type">Item Price</label>
                <input type="text" name="price" onChange={onChange} value={form.price} />
            </Form.Field>
            <Button type="submit">Add</Button>
        </Form>
    )
}

export default ShoppingForm;