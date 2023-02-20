import express from 'express';

// Importing controllers
import { addTech, deleteTech, editTech, getTechID, getTechs } from '../controllers/technicien.js';

// Getting express router featuers
const router = express.Router();

// route for getting all techniciens
router.get('/', getTechs);

// route for getting technicien by his own ID
router.get('/technicien/:id', getTechID);

// route for add new technicien
router.post('/add', addTech);

// route for delete technicien
router.delete('/delete/:id', deleteTech)

// route for modify technicien info
router.put('/edit/:id', editTech);

export default router