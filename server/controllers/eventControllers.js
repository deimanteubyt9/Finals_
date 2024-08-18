// const express = require('express');
// const Event = require('../models/Event');
// const auth = require('../middleware/auth');

// const router = express.Router();

// router.post('/', auth, async (req, res) => {
//   try {
//     const event = new Event(req.body);
//     await event.save();
//     res.status(201).json(event);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create event' });
//   }
// });

// router.get('/', auth, async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch events' });
//   }
// });

// router.put('/:id', auth, async (req, res) => {
//   try {
//     const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(event);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update event' });
//   }
// });

// router.delete('/:id', auth, async (req, res) => {
//   try {
//     await Event.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Event deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete event' });
//   }
// });

// module.exports = router;