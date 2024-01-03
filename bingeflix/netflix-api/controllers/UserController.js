const User = require("../models/UserModel");

module.exports.addToLikedMovies = async(req,res)=>{
    try{
        const {email, data} = req.body;
        const user = await User.findOne({email});

        if(user){
            const {likedMovies} = user;
            const movieAlreadyLiked = likedMovies.find(({id})=>(id= data.id));
            if(!movieAlreadyLiked){
                   await User.findByIdAndUpdate(
                      user.id,
                      {
                        likedMovies:[...user.likedMovies, data],
                      },
                      {new:true});    
            }else return res.json({msg: "Movie already added to the Liked List."})
        }else await User.create({ email, likedMovies: [data]})
        return res.json({msg:"Movie added successfully"})
    }catch(error){
        return res.json({msg: "Error adding movie"})
    }
}