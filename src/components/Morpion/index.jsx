import React from "react";
import './index.css'
import Cell from '../Cell/index';


export default function Morpion() {
    return (
        <table>
            <tr>
                <Cell />
                <Cell />
                <Cell />
            </tr>
            <tr>
                <Cell />
                <Cell />
                <Cell />
            </tr>
            <tr>
                <Cell />
                <Cell />
                <Cell />
            </tr>
        </table>
    )
}