import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/signup",signup );
router.post("/login",login );
router.post("/logout",logout );

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth); // callin this fn when we refresh our profile page this will check if the user is authenticated, we will take them to pfp page or back to login depending on this.

export default router;