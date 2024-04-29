import express from "express"
import { registerUser } from "../controllers/auth.controller";
const router = express.Router();

router
    //* User Registration Route
    /**
     * @route POST /api/auth/register
     * @description Register a new user.
     * @access Public
     * 
     * @params name, email, password
     * 
     * @returns {object} - Registration status and message
     * 
     * @throws {409} If the user already exist
     * @throws {400} If there are validation errors in the request body
     * @throws {500} If there's an Internal server error
     */
    .post('/register', registerUser)



export default router;