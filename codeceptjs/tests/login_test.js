Funcionalidade('login');

Cenário('test something', ({ Eu }) => {
    Eu.amOnPage('https://github.com');
    Eu.see('GitHub');
});
