describe('Strings', () => {

    it('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    it('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });

});
