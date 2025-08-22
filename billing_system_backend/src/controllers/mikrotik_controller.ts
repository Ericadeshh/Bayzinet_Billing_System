import { Request, Response } from "express";

export const manageHotspot = async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    message: "MikroTik hotspot management not implemented",
  });
};
