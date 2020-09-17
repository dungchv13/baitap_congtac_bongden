function ElectricLamp(){          // status
    // this.status = status;
    this.conecToSwitch = function (congtac){
        this.switch = congtac;
        this.setStatus(this.switch.checkStatus());
    }
    this.checkStatus = function (){
        return this.status;
    }
    this.setStatus = function (status){
        this.status = status;
    }
    this.turnOn = function (){
        let k = this.checkStatus();
        if(k){
            alert('den da bat roi');
        }else{
            this.setStatus(true);
        }
    }
    this.turnOff = function (){
        let k = this.checkStatus();
        if(!k){
            alert('den da tat roi');
        }else{
            this.setStatus(false);
        }
    }
}