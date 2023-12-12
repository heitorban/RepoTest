import EvaluationRepository from "./repositories/EvaluationRepository.js"

const saveEvaluation = (evaluationModel) => {
    return EvaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) => {
    return EvaluationRepository.getEvaluationById(id);
}

const getAllEvaluations = () => {
    return EvaluationRepository.getAllEvaluations();
}

const deleteEvaluationById = (id) => {
    return EvaluationRepository.deleteEvaluationById();
}

const updateEvaluationById = (id, evaluationModel) => {
    return EvaluationRepository.updateEvaluationById(id, evaluationModel);
}


const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    deleteEvaluationById,
    updateEvaluationById
}

export default service;