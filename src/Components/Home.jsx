import React, { useEffect, useState } from 'react';
import { Button, Label, Segment } from 'semantic-ui-react';
import { collection, getDocs } from 'firebase/firestore/lite';

import db from '../FirebaseApp';

function Home() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const citiesCol = collection(db, 'cities');
      const citySnapshot = await getDocs(citiesCol);
      setCity(citySnapshot.docs.map((doc) => doc.data()));
    };
    fetchCities();
  }, []);

  return (
    <Segment raised>
      <Label as="a" color="violet" ribbon>
        January
      </Label>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {city.map((city) => (
          <Button
            key={Math.random()}
            style={{ margin: 10 }}
            basic
            color="violet"
            content={city.name}
            label={{
              as: 'a',
              basic: true,
              color: 'violet',
              pointing: 'left',
              content: `${city.population}`,
              icon: 'euro',
            }}
          />
        ))}
      </div>
      <Label as="a" color="violet" ribbon>
        February
      </Label>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        <Button
          style={{ margin: 10 }}
          basic
          color="violet"
          content="01.01.2022"
          label={{
            as: 'a',
            basic: true,
            color: 'violet',
            pointing: 'left',
            content: '2,048',
            icon: 'euro',
          }}
        />
        <Button
          style={{ margin: 10 }}
          basic
          color="violet"
          content="01.01.2022"
          label={{
            as: 'a',
            basic: true,
            color: 'violet',
            pointing: 'left',
            content: '2,048',
            icon: 'euro',
          }}
        />
        <Button
          style={{ margin: 10 }}
          basic
          color="violet"
          content="01.01.2022"
          label={{
            as: 'a',
            basic: true,
            color: 'violet',
            pointing: 'left',
            content: '2,048',
            icon: 'euro',
          }}
        />
        <Button
          style={{ margin: 10 }}
          basic
          color="violet"
          content="01.01.2022"
          label={{
            as: 'a',
            basic: true,
            color: 'violet',
            pointing: 'left',
            content: '2,048',
            icon: 'euro',
          }}
        />
        <Button
          style={{ margin: 10 }}
          basic
          color="violet"
          content="01.01.2022"
          label={{
            as: 'a',
            basic: true,
            color: 'violet',
            pointing: 'left',
            content: '2,048',
            icon: 'euro',
          }}
        />
        <Button
          style={{ margin: 10 }}
          basic
          color="violet"
          content="01.01.2022"
          label={{
            as: 'a',
            basic: true,
            color: 'violet',
            pointing: 'left',
            content: '2,048',
            icon: 'euro',
          }}
        />
      </div>
    </Segment>
  );
}

export default Home;
