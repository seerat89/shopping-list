import React, { useState } from 'react';
import {
  Button,
  Icon,
  Grid,
  Form,
  Checkbox,
  Statistic,
  Label,
} from 'semantic-ui-react';

function NewList() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);
  const [showButtons, setShowButtons] = useState(false);

  const handleOnEnter = (e) => {
    if (e.key === 'Enter') {
      setCount(count + 1);
      setValue('');
      setItems([...items, { id: count, item: e.target.value }]);
    }
  };

  return (
    <Grid centered columns={1} style={{ marginTop: 20 }}>
      <Grid.Column>
        <div
          style={{
            textAlign: 'center',
            marginBottom: 10,
          }}
        >
          <Statistic color="violet">
            <Statistic.Value>
              0.0&nbsp;
              <Icon name="euro" size="mini" />
            </Statistic.Value>
            <Statistic.Label color="violet">04.02.2022</Statistic.Label>
          </Statistic>
        </div>
        {items.map((item) => (
          <div
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '0.5px solid grey',
              minHeight: 50,
            }}
            onMouseOver={() => setShowButtons(item.id)}
            onMouseLeave={() => setShowButtons('')}
            key={item.id}
          >
            <Checkbox label={item.item} />
            {showButtons === item.id && (
              <Button.Group size="mini" position="right">
                <Button
                  icon="edit"
                  color="green"
                  onClick={() => alert(item.id)}
                />
                <Button
                  icon="remove"
                  color="red"
                  onClick={() => alert(item.id)}
                />
              </Button.Group>
            )}
          </div>
        ))}
        <Form style={{ marginTop: 20 }}>
          <Form.Field>
            <input
              value={value}
              placeholder="Type and press enter"
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => handleOnEnter(e)}
            />
          </Form.Field>
        </Form>
        <Form style={{ marginTop: 20 }}>
          <Form.Group>
            <Form.Input
              labelPosition="left"
              min="0"
              type="number"
              placeholder="Total amount"
              style={{ margin: 0 }}
            >
              <Label basic>€</Label>
              <input />
            </Form.Input>
            <Form.Button primary content="Save" icon="save" />
          </Form.Group>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default NewList;
