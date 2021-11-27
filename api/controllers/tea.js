const newTea = (req, res, next) =>{
    res.json({message : "POST NEW TEA"})
}
const showTea = (req, res, next) =>{
    res.json({message : "SHOW NEW TEA"})
}
const deleteTea = (req, res, next) =>{
    res.json({message : "deleteTea "})
}


const getTeaCount = (req, res, next) => {
    res.json({message: `GET ${req.params.name} tea`});
    console.log(req.params.name);
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

//DELETE '/tea/:name'
const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
};

module.exports = {newTea, showTea,deleteTea,getTeaCount,newComment,deleteOneTea} ;