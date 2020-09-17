function SwitchButton(status){
    this.status = status;
    this.connectToLamp = function (lamp){
        this.lamp = lamp;
        this.lamp.conecToSwitch(this);
    }
    this.switchON = function (){
        this.lamp.turnOn();
        this.status = true;
    }
    this.switchOff = function (){
        this.lamp.turnOff();
        this.status = false;
    }
    this.checkStatus = function (){
        return this.status;
    }

}