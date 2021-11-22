const Task = require("../model/Task");

//Get all tasks
const task_all = async(req, res)=>{
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.json({message: error});
    }
};

//Get single task
const task_details = async(req, res)=>{
    try {
        const task = await Task.findById(req.params.taskId);
        res.json(task);
    } catch (error) {
        res.json({message: error});
    }
};

//Add new task
const task_create = async(req, res)=>{

    console.log(req.body)
    const task = new Task({
        excercise: req.body.excercise,
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.date
    })

    try {
        const saveTask = await task.save();
        res.send(saveTask);
    } catch (error) {
        res.status(400).send(error);
    }
};

//Update task
const task_update = async(req, res)=>{
    try {
        const task = {
            excercise: req.body.excercise,
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.date
        }

        const updateTask = await Task.findByIdAndUpdate(
            { _id: req.params.taskId},
            task
        );
        res.json(updateTask);
        
    } catch (error) {
        res.json({message: error});
    }
};

//Delete task
const task_delete = async(req, res)=>{
    try {
        const removetask = await Task.findByIdAndDelete(req.params.taskId);
        res.json(removetask);
    } catch (error) {
        res.json({message: error});
    }    
};

module.exports={
    task_all,
    task_details,
    task_create,
    task_update,
    task_delete
}