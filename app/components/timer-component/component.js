import Ember from 'ember';

const CLOCK_CONFIG = {
    POMODORO: 1500,
    SHORT_BREAK: 300,
    LONG_BREAK: 600
}

const CLOCK_STATE = {
    STARTED: "STARTED",
    PAUSED: "PAUSED",
    RESET: "RESET"
}

export default Ember.Component.extend({
    clockState: CLOCK_STATE.PAUSED,
    initialTime: CLOCK_CONFIG.POMODORO,
    timeleft: Ember.computed.oneWay('initialTime'),
    minutesLeft: Ember.computed('timeleft', function(){
        return Math.floor(this.get('timeleft') / 60);
    }),
    secondsLeft: Ember.computed('timeleft', function(){
        return Math.floor(this.get('timeleft') % 60);
    }),
    actions: {
        setInitialTime(config){

            switch(config) {
                case "POMODORO":
                this.set('initialTime', CLOCK_CONFIG.POMODORO);
                console.log('initialTime:', this.get('initialTime'));
                break;
                case "SHORT_BREAK":
                this.set('initialTime', CLOCK_CONFIG.SHORT_BREAK);
                console.log('initialTime:', this.get('initialTime'));
                break;
                case "LONG_BREAK": 
                this.set('initialTime', CLOCK_CONFIG.LONG_BREAK);
                console.log('initialTime:', this.get('initialTime'));
                break;
                default:
                console.log("WARN: did not match a case.");
                break;
            }
        },
        setClockState(config){

            switch(config){
                case CLOCK_STATE.PAUSED:
                this.set('clockState', CLOCK_STATE.PAUSED);
                this.countdown(this.get('clockState'));
                console.log('clock paused');
                break;
                case CLOCK_STATE.STARTED:
                this.set('clockState', CLOCK_STATE.STARTED);
                this.countdown(this.get('clockState'));
                console.log('clock started');
                break;
                case CLOCK_STATE.RESET:
                this.set('clockState', CLOCK_STATE.PAUSED);
                this.set('initialTime', this.get('initialTime'));
                this.countdown(this.get('clockState'));
                console.log('clock paused');
                console.log('initialTime', this.get('initialTime'));
                break;
                default: 
                console.log("doesn't fit any of the scenarios");
                break;
            }
        }
    },
    countdown(state){

        if(state === CLOCK_STATE.STARTED){
            let timeleft = this.get('timeleft');
            let clockState = this.get('clockState');

            Ember.run.later(()=> {
                console.log(timeleft);
                if(state === CLOCK_STATE.STARTED){
                  this.decrementProperty('timeleft', 1);
                }
                console.log('timeleft:', timeleft);
                console.log('state:', state);
                console.log('this.clockState():', this.get('clockState'));
                this.countdown(clockState);
            }, 1000);
        }
    }
});
