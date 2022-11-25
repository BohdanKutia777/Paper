const vehicle = {
    move () {
        console.log('Argo is moving');
    },
    stop () {
        console.log('Argo stopped')
    },
}
const ship = {
    hasWheels: false,
    name: 'Chaika',
    liftAnchorUp() {
        console.log(`${this.name} lifting anchor up`);
    },
    liftAnchorDown() {
        console.log(`${this.name} lifting anchor down`);
    },
    startMachine() {
        this.liftAnchorUp();
        this.move();
    },
    stopMachine() {
        this.stop();
        this.liftAnchorDown();
    },
}

Object.setPrototypeOf(ship, vehicle);