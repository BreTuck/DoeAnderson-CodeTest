import Router from "express-promise-router";
import { create } from './database';

const router = new Router();

// Route save the form data from contact me form
router.post('/save', async(req, res) => {
    try {
        let info = {
            name: req.body.name,
            email: req.body.email,
            msg: req.body.msg
        };
        console.log(info);
        const success = await req.context.database.query(create(info));
        if(success.rowCount === 1) {
            res.status(200).send({ status: true, message: ' Message Saved' });
        } else res.status(200).send({ status: false, message: 'Unable to save message.' }); 
    } catch(err) { console.error(err); }
});

export { router as router };