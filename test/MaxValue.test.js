const MaxValue = require('../MaxValue');

describe('MaxValue', () => {
    test('debería devolver el máximo beneficio para un arreglo de acciones', () => {
        const shares = [7, 11, 6, 5, 13];
        expect(MaxValue(shares)).toEqual(8);
    });

    test('debería devolver 0 si no hay oportunidad de obtener beneficio No es posible obtener beneficio', () => {
        const shares = [10, 8, 6, 4, 2];
        expect(MaxValue(shares)).toEqual(0);
    });

    test('debería manejar un solo día de acciones, No se puede obtener beneficio con un solo día', () => {
        const shares = [5];
        expect(MaxValue(shares)).toEqual(0);
    });

    test('debería manejar arreglos vacíos, No se puede obtener beneficio con un arreglo vacío ', () => {
        const shares = [];
        expect(MaxValue(shares)).toEqual(0);
    });

    test('debería manejar arreglos con precios que aumentan cada día, máximo beneficio posible', () => {
        const shares = [1, 5, 10, 15, 20];
        expect(MaxValue(shares)).toEqual(19);
    });
});
