import React, { useState } from "react";
import * as S from "./styles";
import Keypad from "../Keypad";

export default function Calculator() {
    const [state, setState] = useState({
        expression: "",
        input: "",
        error: null,
        hasResult: null
    });

    console.log(state);

    const handleChange = (event) => {
        event.preventDefault();

        if (!event.target.validity.valid) return;

        setState(prevState => ({
            ...prevState,
            input: prevState.hasResult ? event.target.value.replace(prevState.input, '') : event.target.value,
            expression: prevState.hasResult ? '' : prevState.expression,
            hasResult: false
        }));
    };

    const handleKeyPress = (event) => {
        // TO-DO 
        //let expression = `${state.expression} ${state.input}`.replace(/[-+\/*=]$/gm, '0');

        if (['+', '-', '/', '*'].includes(event.key)) {
            setState(prevState => ({
                ...prevState,
                expression: `${prevState.expression} ${prevState.input} ${event.key}`,
                input: ""
            }));
            return;
        }

        if ('=' === event.key) {
            let expression = `${state.expression} ${state.input}`;
            let result;
            let error;

            try {
                result = eval(expression);
            } catch (e) {
                result = '';
                error = true;
            }

            setState(prevState => ({
                ...prevState,
                expression: `${prevState.expression} ${prevState.input} =`,
                hasResult: true,
                input: result,
                error: error,
            }));
            return;
        }
    };

    return (
        <S.Container>
            <S.Expression>
                {state.expression}
            </S.Expression>
            <S.Input type="text" pattern="^[0-9\-]*$" value={state.input} autoComplete="off" onChange={handleChange} onKeyPress={handleKeyPress}/>
            <S.Error>
                {state.error ? 'Błąd' : ''}
            </S.Error>
            <Keypad/>
        </S.Container>
    )
}