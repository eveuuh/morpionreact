import React from "react";

export default function Cell() {
    let value = '';
    // (Math.random() > 0.5? 'x' :'o');
    return (
        <td onClick={() => {
            value = (Math.random() > 0.5? 'x' :'o');
        }}>{value}</td>
    )
}