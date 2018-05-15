class Cat {

    constructor(options) {

        if (options.name == undefined) {
            this.name = 'UnNamed';
        }
        else {
            this.name = options.name;
        }

        if (options.color == undefined) {
            this.color = 'None';
        }
        else {
            this.color = options.color;
        }

        if (options.weight == undefined) {
            this.weight = '1';
        }
        else {
            this.weight = options.weight;
        }
    }

    toString() {
        return `${this.name} ${this.color} ${this.weight}`;
      }
}

