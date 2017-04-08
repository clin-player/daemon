// TODO: import EventEmitter

interface IAudio extends EventEmitter {
	play(url: string): void
	pause(): void
	resume(): void
	togglePause(): void
	stop(): void
	setPlaybackRate(rate: number): boolean

	setPosition(position: number): void
	getPosition(): number
	getDuration(): number

	setVolume(): void
	getVolume(): number

	getMute(): boolean
	setMute(mute: boolean): void
	toggleMute(): boolean

	getState(): State
}

enum State {
	BUFFERING,
	INITED,
	PAUSED,
	PLAYING,
	STOPPED,
	UNINITED
}

interface IAudioEvent {}

interface IAudioEventPositionChange extends IAudioEvent {
	position: number
}

interface IAudioEventPlayStateChange extends IAudioEvent {
	state: State
}

interface IAudioEventPlaybackRateChange extends IAudioEvent {
	rate: number
}

interface IAudioEventVolumeChange extends IAudioEvent {
	volume: number
}
