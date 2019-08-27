

const checkInputFormat = require('./utils').checkInputFormat;


let input;

describe('Utils Tests', () => {



    describe('Input Formats', () => {

        describe('basic checks', () => {
            test('is not empty string', () => {
                expect(checkInputFormat("")).toBeFalsy();
            });
            test('is not undefined', () => {
                expect(checkInputFormat()).toBeFalsy();
            });
            test('is not missing open brace', () => {
                expect(checkInputFormat("5x5 )")).toBeFalsy();
            });
            test('is not missing close brace', () => {
                expect(checkInputFormat("5x5 (")).toBeFalsy();
            });
        });

        describe('grid check', () => {
            test('has integer in 1st position', () => {
                expect(checkInputFormat("ix5")).toBeFalsy();
            });
            test('has x in 2nd position', () => {
                expect(checkInputFormat("5n5 (1, 3) (4, 4)")).toBeFalsy();
            });
            test('has integer in 3rd position', () => {
                expect(checkInputFormat("5xi (1, 3) (4, 4)")).toBeFalsy();
            });
            test('has space in last position', () => {
                expect(checkInputFormat("5x50 (1, 3) (4, 4)")).toBeFalsy();
            });
        });

        describe('coord check', () => {
            test('accepts correct input with 1 coord', () => {
                expect(checkInputFormat("5x5 (1, 3)")).toBeTruthy();
            });
            test('accepts correct input with more than 1 coord', () => {
                expect(checkInputFormat("5x5 (1, 3) (4, 4)")).toBeTruthy();
            });
            test('has integer in 1st position', () => {
                expect(checkInputFormat("5x5 (m, 3) (4, 4)")).toBeFalsy();
            });
            test('has comma in 2nd position', () => {
                expect(checkInputFormat("5x5 (1x 3) (4, 4)")).toBeFalsy();
            });
            test('has space in 3rd position', () => {
                expect(checkInputFormat("5x5 (1,3) (4, 4)")).toBeFalsy();
            });
            test('has integer in 4th position', () => {
                expect(checkInputFormat("5x5 (1, p) (4, 4)")).toBeFalsy();
            });
            test('has brace in 5th position', () => {
                expect(checkInputFormat("5x5 (1, 3 (4, 4)")).toBeFalsy();
            });
            test('has integer in 6th position', () => {
                expect(checkInputFormat("5x5 (1, 3)(4, 4)")).toBeFalsy();
            });
        });
    });

});











