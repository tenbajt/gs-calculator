import React from "react";
import * as S from "./styles";

export default function Keypad(props) {
    return (
        <S.Layout>
            <S.Button disabled>%</S.Button>
            <S.Button>CE</S.Button>
            <S.Button>C</S.Button>
            <S.Button>&#9003;</S.Button> {/* Backspace */}
            <S.Button disabled>&#8543;</S.Button>
            <S.Button disabled>x&#178;</S.Button> {/* Square power */}
            <S.Button disabled>&#8730;x</S.Button> {/* Square root */}
            <S.Button>&#247;</S.Button> {/* Divide */}
            <S.Button>7</S.Button>
            <S.Button>8</S.Button>
            <S.Button>9</S.Button>
            <S.Button>&#215;</S.Button> {/* Multiply */}
            <S.Button>4</S.Button>
            <S.Button>5</S.Button>
            <S.Button>6</S.Button>
            <S.Button>-</S.Button>
            <S.Button>1</S.Button>
            <S.Button>2</S.Button>
            <S.Button>3</S.Button>
            <S.Button>+</S.Button>
            <S.Button disabled>&#177;</S.Button> {/* Plus/minus */}
            <S.Button>0</S.Button>
            <S.Button>,</S.Button>
            <S.Button>=</S.Button>
        </S.Layout>
    )
}