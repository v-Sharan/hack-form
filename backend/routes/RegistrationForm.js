import { Router } from "express";
import { Form } from "../mongoDb/schema/regiterForm.js";
import { HttpError } from "../utils/HttpError.js";

const router = Router();

router.post("/", async (req, res, next) => {
  const {
    name,
    register_number,
    room_number,
    year,
    course,
    gender,
    email,
    date_of_outing,
    date_of_returning,
    parent_name,
    phone_number,
    outing_place,
    state,
    city,
    outgoing_reason,
    address,
  } = req.body;

  let existingUser;

  try {
    existingUser = await Form.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Registraion Failed,Try again later", 402);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("Already registered with this email", 422);
    return next(error);
  }

  const createForm = new Form({
    name,
    register_number,
    room_number,
    year,
    course,
    gender,
    email,
    date_of_outing,
    date_of_returning,
    parent_name,
    phone_number,
    outing_place,
    state,
    city,
    outgoing_reason,
    address,
  });

  try {
    await createForm.save();
  } catch (err) {
    const error = new HttpError("Registraion Failed,Try again later", 402);
    return next(error);
  }
  res.json({ sumited: "Succesfully" });
});

export default router;
