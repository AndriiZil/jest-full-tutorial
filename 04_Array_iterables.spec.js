describe('Arrays and iterables', () => {

    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ];

    it('the shopping list has milk on it', () => {
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
    });

})