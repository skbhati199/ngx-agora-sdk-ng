import { IMicrophoneAudioTrack } from "agora-rtc-sdk-ng";
import { IAudioTrack } from "../core/audio-track";

export class AudioTrack implements IAudioTrack {

    private _microphoneAudioTrack: IMicrophoneAudioTrack;

    constructor(private microphoneAudioTrack: IMicrophoneAudioTrack) {
        this._microphoneAudioTrack = this.microphoneAudioTrack;
    }

    public microphoneMute(): void {
        this._microphoneAudioTrack.setVolume(50);
    }

    public microphoneUnMute(): void {
        this._microphoneAudioTrack.setVolume(0);
    }

    public setVolume(volume: number): void {
        this._microphoneAudioTrack.setVolume(volume);
    }

}