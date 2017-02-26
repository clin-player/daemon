import 'package:eventable/eventable.dart';

abstract class IAudio extends EventEmitter {
	void play(String url);
	void pause();
	void resume();
	void togglePause();
	void stop();
	bool setPlaybackRate(int rate);

	void setPosition(num position);
	num getPosition();
	num getDuration();

	void setVolume();
	int getVolume();

	bool getMute();
	void setMute(bool mute);
	bool toggleMute();

	State getState();
}

enum State {
	BUFFERING,
	INITED,
	PAUSED,
	PLAYING,
	STOPPED,
	UNINITED
}

abstract class IAudioEvent {}

abstract class IAudioEventPositionChange extends IAudioEvent {
	num position;
}

abstract class IAudioEventPlayStateChange extends IAudioEvent {
	State state;
}

abstract class IAudioEventPlaybackRateChange extends IAudioEvent {
	int rate;
}

abstract class IAudioEventVolumeChange extends IAudioEvent {
	int volume;
}
