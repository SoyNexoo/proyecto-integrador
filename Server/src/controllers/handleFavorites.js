let myFavorites = []

function postFav (req,res){
    myFavorites.push(req.body);
    return res.json(myFavorites)
}

function deleteFav(req,res){
    const {id} = req.params;
    myFavorites = myFavorites.filter(favs =>{
        favs.id !== Number(id)
    })

    return res.json(myFavorites)
}

function getFav(req , res){
    return myFavorites
}

module.exports ={
    postFav,
    deleteFav,
    getFav
}

