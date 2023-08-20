import React from "react";
import { Headers } from '../constants/app.constants'
import './shipTable.css';

export default function ShipTable({ ships }) {
  return (
    <table className="shipTable">
      <thead>
        <tr>
          {Headers.map(header => (
            <th className="shipTable-th" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ships && (ships.map(ship => (
          <tr key={ship.ship_id}>
            <td className="shipTable-td">
              {ship.ship_type}
            </td>
            <td className="shipTable-td">
              {ship.weight_kg}
            </td>
            <td className="shipTable-td">
              {ship.home_port}
            </td>
            <td className="shipTable-td">
              {ship.ship_name}
            </td>
            <td className="shipTable-td">
              {ship.class}
            </td>
            <td className="shipTable-td">
              <button>Upload Icon</button>
            </td>
          </tr>
        )))}
      </tbody>
    </table>
  )
}