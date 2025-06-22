import app from './app.js'

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor en puerto: ', process.env.PORT || 3000);
});