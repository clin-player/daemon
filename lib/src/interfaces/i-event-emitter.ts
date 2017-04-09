interface IEventEmitter {
	on(event: IEvent, callback: (event: IEvent) => void)
	off(event: IEvent, callback: (event: IEvent) => void)
}

interface IEvent {}
