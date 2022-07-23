import React from 'react';
import {render} from '@testing-library/react'
import PrimeraApp from '../PrimeraApp';

describe('Probando el componente <PrimeraApp />', () => {
   test('Debe mostrar el titulo', () => {
       const saludo = 'Hola, soy Goku';
       const wrapper = render(<PrimeraApp saludo={saludo} />)
   })
    
});
