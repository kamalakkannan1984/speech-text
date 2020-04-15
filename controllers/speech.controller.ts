import { Request, Response, NextFunction } from "express";
import * as SpeechModel from '../models/speech.model';
/**
 * Speech to text
 * @param req
 * @param res
 */
export async function speechToText(req: Request, res: Response) {
    try {
        await SpeechModel.main().then(text => {
            return res.status(200).send({ Transcription: text });
        }).catch(console.error);
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}

export async function speechToTextVoicegain(req: Request, res: Response) {
    try {
        SpeechModel.voicegain().then(function (text) {
            console.log(text);
            return res.status(200).send({ Transcription: text });
        }).catch(console.error);
    } catch (err) {
        return res.status(err.status).send(err.msg);
    }
}






