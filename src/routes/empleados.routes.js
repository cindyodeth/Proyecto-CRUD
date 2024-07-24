import { Router } from 'express';
import pool from '../database.js'
const router = Router();

router.get('/add', (req, res)=>{
    res.render('empleados/list');
});

router.post('/add', async(req, res)=>{
    try {
        
        const name = req.body.name;
        const lastname = req.body.lastname ;
        const phone = req.body.phone;
        const ege = req.body.ege;

        await pool.query('INSERT INTO empleados SET ?', {name:name, lastname:lastname,phone:phone,ege:ege});
        res.redirect('list');
    } catch (error) {
        res.status(500).json({Message:error.Message});
    }
});

router.get('/list', async(req, res)=>{
    try {
        
        const [result] = await pool.query('select * from empleados');
        res.render('empleados/list', {empleados: result});

    } catch (error) {
        res.status(500).json({Message:error.Message});
    }
   
});

router.get('/edit/:id', async(req, res)=>{
    try {

        const {id} = req.params;
        const [empleado] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);
        const empleadoEdit = empleado[0];
        res.render('empleados/edit', {empleado: empleadoEdit});
    } catch (error) {
        res.status(500).json({Message:error.Message});
    }

});

router.post('/edit/:id', async(req, res)=>{
    try {

        const {name, lastname,phone, ege} = req.body;
        const {id} = req.params;
        const empleadoEdit = {name, lastname,phone, ege};
        await pool.query('UPDATE empleados SET ? WHERE id = ?',[empleadoEdit,id]);
        res.redirect('/list');
        
    } catch (error) {

        res.status(500).json({Message:error.Message});
    }
});


router.get('/delete/:id', async(req, res)=>{
    try {

        const {id} = req.params;
        await pool.query('DELETE FROM empleados WHERE id = ?', [id]);
        res.redirect('/list');
        
    } catch (error) {
        res.status(500).json({Message:error.Message});
    }

});

export default router;