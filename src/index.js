import express from 'express'
import { engine } from 'express-handlebars';
import { get } from 'http';
import morgan from 'morgan';
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    layoutsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/',(req, res)=>{
    res.json({"message": "hola desde la primera vista"});
});


app.listen(app.get('port'), ()=>
console.log('server listening on port', app.get('port')));
