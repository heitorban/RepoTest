import express from 'express';
let router = express.Router();

import TeacherService from "./services/TeacherService";

router.post("/addTeacher", async function(req,res) {
    const teacherModel = {
            name: req.body.name            
    }
    const teacher = await TeacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeachers", async function(req,res){
    const allTeachers = await TeacherService.getAllTeachers();
    return res.status(200).json(allTeachers);
});

router.get("/teacher/:id", async function(req,res){
    const teacher = await TeacherService.getUSerById(req.params.id);
    return res.status(200).json(teacher);
});

router.delete("/deleteTeacher/:id", async function(req,res){
    const teacher = await TeacherService.deleUSerById(req.params.id);
    return res.status(200).json(teacher);
});


router.put("/updateTeacherById", async function(req,res) {
    const teacherModel = {
            name: req.body.name,
            
    }
    const teacher = await TeacherService.updateUSerById(req.params.id,teacherModel);
    return res.status(200).json(teacher);
});

export default router;