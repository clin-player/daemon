// TODO: import EventEmitter

interface IAudio extends IEventEmitter {
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

	on(event: IAudioEvent, callback: (event: IAudioEvent) => void)
	off(event: IAudioEvent, callback: (event: IAudioEvent) => void)
}

enum State {
	BUFFERING,
	PAUSED,
	PLAYING,
	STOPPED,
	ERROR
}

interface IAudioEvent extends IEvent {}

interface IPositionChanged extends IAudioEvent {
	position: number
}

interface IStateChanged extends IAudioEvent {
	state: State,
	error: string
}

interface IPlaybackRateChanged extends IAudioEvent {
	rate: number
}

interface IVolumeChanged extends IAudioEvent {
	volume: number
}

interface IMetadataChanged extends IAudioEvent {
	duration: number
}
