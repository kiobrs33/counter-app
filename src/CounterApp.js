import React, {useState} from 'react';
import PropTypes from 'prop-types';

//OJO Destructuracion de VALUE por PROPS
const CounterApp = ({value = 5}) => {

    //Hooks - SetState
    const [counter, setCounter] = useState(value); //Destructuracion

    //Forma Abreviada y mas Simple
    const handledAdd = () => {
        console.log(`Click A - ${counter}`);

        //Primera manera de cambiar la Variable
        // setCounter( counter + 1);

        //Segunda manera de cambiar la Variable
        setCounter( (c) => c + 1 );
    }

    const handledSubstract = (e) => {
        counter > 0 &&  setCounter(counter - 1);
    }

    const handledReset = (e) => {
        setCounter(value);
    }

    //Forma Tradicional con Arrow Functions
    // const handledAdd2 = (e) => {
    //     console.log('click B');
    // }

    return (
        <>
            <h1>Counter App</h1>
            <p>{counter}</p>
            <button onClick={handledAdd}> +1 </button>
            <button onClick={handledReset}> Reset </button>
            <button onClick={handledSubstract}> -1 </button>
            {/* <button onClick={(e) => handledAdd2(e) }> +1 B </button> */}

        </>
    );
};

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}

export default CounterApp;