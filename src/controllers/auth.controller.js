import authService from "../services/auth.service.js";

// =================Registration Controller=======================

export const register = async (req, res) => {
    try {
        const data = await authService.register(req.body);
        res.json({
            status: true,
            data
        });

    } catch (error) {

        res.status(400).json({
            status: false,
            message: error.message
        });

    }

};


// ==================== Login Controller =====================

export const login = async (req, res) => {
    try {
        const data = await authService.login(req.body);
        res.json({
            status: true,
            data
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }

};
