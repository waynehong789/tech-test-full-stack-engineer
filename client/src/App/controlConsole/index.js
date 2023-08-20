import React, { useState } from "react";
import ShipTable from '../shipTable';
import Select from 'react-select';
import { Options } from "../constants/app.constants";
import {spaceShipsQuery} from '../actions';
import { useSelector, useDispatch } from 'react-redux'
import './controlConsole.css'


export default function ControlConsole() {
    const [selectedOption, setSelectedOption] = useState(null);
    const spaceShips = useSelector((state) => state.spaceData.spaceShips)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        await spaceShipsQuery({...formJson, type: selectedOption?.value});
      }
    return (
        <>
            <h1>
                Space Control Console
            </h1>
            <form className="controlConsole" method="post" onSubmit={handleSubmit}>
                <div className="controlConsole-shipType">
                    <label className="controlConsole-lable">Ship type</label>
                    <span className="controlConsole-select">
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={Options}
                            components={{
                                IndicatorSeparator: () => null
                              }}
                        />
                    </span>
                </div>
                <div className="controlConsole-weight">
                    <label className="controlConsole-lable">Weight</label>
                    <input className="controlConsole-input" name="weight" />
                </div>
                <div>
                    <label className="controlConsole-lable">Home port</label>
                    <input className="controlConsole-input" name="port"/>
                    <button className="controlConsole-search" type="submit">Search</button>
                </div>
            </form>
            <div>
                <ShipTable ships={spaceShips}/>
            </div>
        </>
    )
}