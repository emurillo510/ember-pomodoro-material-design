import Ember from 'ember';

const CLOCK_CONFIG = {
    POMODORO: 1500,
    SHORT_BREAK: 300,
    LONG_BREAK: 600
}

const CLOCK_STATE = {
    RUNNING: ""
}

export default Ember.Component.extend({
    initialTime: CLOCK_CONFIG.POMODORO,
    timeleft: Ember.computed('initialTime', function(){
        return this.get('initialTime');
    }),
    minutesLeft: Ember.computed('timeleft', function(){
        return this.get('timeleft') / 60;
    }),
    secondsLeft: Ember.computed('timeleft', function(){
        return this.get('timeleft') % 60;
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

        }
    }
});
