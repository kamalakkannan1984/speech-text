import { Router } from "express";
import * as SpeechController from "./controllers/speech.controller";

const SPEECH_TO_TEXT = "/speechToText";
const SEECH_TO_TEXT_VOICEGAIN = "/speechToTextVoicegain";

export const Routes = Router()
    .post(SPEECH_TO_TEXT, SpeechController.speechToText)
    .post(SEECH_TO_TEXT_VOICEGAIN, SpeechController.speechToTextVoicegain);

