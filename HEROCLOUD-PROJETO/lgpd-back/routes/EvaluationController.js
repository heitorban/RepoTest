import express from 'express';
let router = express.Router();

import EvaluationService from "./services/EvaluationService";

router.post("/addEvaluation", async function(req,res) {
    const evaluationModel = {
            concept: req.body.concept
    }
    const evaluation = await EvaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});

router.get("/getAllEvaluations", async function(req,res){
    const allEvaluations = await EvaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluations);
});

router.get("/evaluation/:id", async function(req,res){
    const allEvaluations = await EvaluationService.getUSerById(req.params.id);
    return res.status(200).json(evaluation);
});

router.delete("/deleteEvaluation/:id", async function(req,res){
    const allEvaluations = await EvaluationService.deleUSerById(req.params.id);
    return res.status(200).json(evaluation);
});


router.put("/updateEvaluationById", async function(req,res) {
    const evaluationModel = {
        concept: req.body.concept
    }
    const evaluation = await EvaluationService.updateUSerById(req.params.id,evaluationModel);
    return res.status(200).json(evaluation);
});

export default router;