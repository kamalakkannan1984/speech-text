// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Imports the Google Cloud client library
import * as speech from '@google-cloud/speech';
import * as fs from 'fs';
import request = require('request-promise');

// [START speech_quickstart]
export async function main() {

    // Creates a client
    const client = new speech.SpeechClient();
    // The name of the audio file to transcribe
    const fileName = './resources/Google_Gnome.wav';

    // Reads a local audio file and converts it to base64
    const file = fs.readFileSync(fileName);
    const audioBytes = file.toString('base64');
    //console.log(audioBytes);
    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        content: audioBytes,
    };
    enum encodingFormate { LINEAR16 = "LINEAR16" };
    const config = {
        encoding: encodingFormate.LINEAR16,
        sampleRateHertz: 16000,
        languageCode: 'en-US',
    };
    const request = {
        audio: audio,
        config: config,
    };
    // Detects speech in the audio file    
    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    //console.log(`Transcription: ${transcription}`);
    return transcription;
}

export async function voicegain() {
    let response: any = {};
    /*await request.get("http://httpbin.org/ip")
        .then((body) => { response = JSON.parse(body); })
        .catch((err) => { response = { "origin": err.toString() }; }); */
    // Now that we have our response, pull out the origin and return it
    // to the caller.    
    const fileName = './resources/Google_Gnome.wav';

    // Reads a local audio file and converts it to base64
    const file = fs.readFileSync(fileName);
    const audioBytes = file.toString('base64');

    const options = {
        method: 'POST',
        uri: 'https://api.voicegain.ai/v1/asr/transcribe',
        body: {
            "audio": {
                "source": {
                    "inline": {
                        "data": audioBytes
                    }
                }
            },
            "settings": {
                "asr": {
                    "hints": [
                        "acme",
                        "bugs bunny"
                    ]
                }
            }
        },
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS52b2ljZWdhaW4uYWkvdjEiLCJzdWIiOiI4NWZhNmIzYi1jMTMwLTQzNzUtODZhOC1lZmRiMDY2YTc4ZjQifQ.MmYghgnSVWvYXF_SoX922Qs0MI8v5HcBDRfDSexIQEg'
        },
        json: true // Automatically stringifies the body to JSON
    };

    await request(options)
        .then(function (parsedBody) {
            console.log(parsedBody);
            return parsedBody;
        })
        .catch(function (err) {
            console.log(err);
        });
}

// [END speech_quickstart]
