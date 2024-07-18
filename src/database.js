import {createPool} from 'mysql2/promise';
const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password:'$0p0rt3',
    database: 'empleados01'

});

export default pool;
