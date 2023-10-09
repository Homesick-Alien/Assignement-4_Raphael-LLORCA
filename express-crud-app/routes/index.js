// routes/index.js
const express = require('express');
const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { param1, param2 } = req.body;
    const [newRecord] = await db('your_table_name').insert({ column1: param1, column2: param2 }).returning('*');
    res.json(newRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/retrieve/:param', async (req, res) => {
  try {
    const { param } = req.params;
    const records = await db('your_table_name').where('column_name', 'like', `%${param}%`);
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { changes } = req.body;
    await db('your_table_name').where('id', id).update(changes);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db('your_table_name').where('id', id).del();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
