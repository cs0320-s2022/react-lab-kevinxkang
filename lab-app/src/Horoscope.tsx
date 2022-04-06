import TextBox from "./TextBox";
import React, {useState} from 'react';

// @ts-ignore
import {AwesomeButton} from "react-awesome-button";
import axios from "axios";

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");

    //TODO: Fill in the ? with appropriate names/values for a horoscope.
    // HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising
            }

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        const request = "http://localhost:4567/horoscope";  // 1

        axios.post(request, toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1 className="Horoscope-heading"> Horoscopes </h1>
            <TextBox label={"Sun Sign"} change={setSun}/>
            <TextBox label={"Moon Sign"} change={setMoon}/>
            <TextBox label={"Rising Sign"} change={setRising}/>

            <AwesomeButton type="primary" onPress={requestHoroscope}>Awesome Button</AwesomeButton>
            {horoscope == null ? "" : horoscope.map((field: string) => <p>{field}</p>)}

        </div>
    )
}

export default Horoscope;