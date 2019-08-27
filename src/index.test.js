const { PizzaBot } = require('./index');

let pizzabot;
let input;

describe('PizzaBot Class Tests', () => {

    describe('PizzaBot Class', () => {
        test('adds name', () => {
            let pizzabot = new PizzaBot('Pizzamia');
            expect(pizzabot.name).toBe('Pizzamia');
        });
        test('creates name', () => {
            let pizzabot = new PizzaBot();
            expect(pizzabot.name).toBe('Pizzabotti');
        });
        test('has grid', () => {
            let pizzabot = new PizzaBot();
            expect(pizzabot.grid).toBe('');
        });
        test('has deliveries', () => {
            let pizzabot = new PizzaBot();
            expect(pizzabot.deliveries).toBe('');
        });
        test('has route', () => {
            let pizzabot = new PizzaBot();
            expect(pizzabot.route).toBe('');
        });
    });

    describe('Deliveries', () => {
        test('sets grid', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            expect(pizzabot.grid).toBe('5');
        });
        test('sets deliveries', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            expect(pizzabot.deliveries).toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
        });
        test('parses deliveries', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            expect(pizzabot.parseDeliveries(input)).toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
        });
        test('gets deliveries', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            expect(pizzabot.getDeliveries()).toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
        });
    });

    describe('Routes', () => {
        test('sets route', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            pizzabot.setRoute();
            expect(pizzabot.route).toBe('ENNNDEEEND');
        });
        test('gets route', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            pizzabot.setRoute();
            expect(pizzabot.getRoute()).toBe('ENNNDEEEND');
        });
    });

    describe('Compass Direction', () => {
        pizzabot = new PizzaBot();
        test('gets Direction for Up', () => {
            expect(pizzabot.getDirection('y',0,1)).toBe('N');
        });
        test('gets Direction for Down', () => {
            expect(pizzabot.getDirection('y',1,0)).toBe('S');
        });
        test('gets Direction for Left', () => {
            expect(pizzabot.getDirection('x',1,0)).toBe('W');
        });
        test('gets Direction for Right', () => {
            expect(pizzabot.getDirection('x',0,1)).toBe('E');
        });
    });

});











