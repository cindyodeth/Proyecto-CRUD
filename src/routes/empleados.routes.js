import { Router } from 'express';
import pool from '../database.js'
const router = Router();

router.get('/add', (req, res)=>{
    res.render('empleados/add');
});

router.get('/list', async(req, res)=>{
    try {
        
        const [result] = await pool.query('select * from empleados');
        //res.render('empleados/list');
        //console.log(result)
        res.render('empleados/list', {empleados: result});

    } catch (error) {
        res.status(500).json({Message:error.Message});
    }
   
});

export default router;