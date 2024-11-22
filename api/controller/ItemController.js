const User = require("../model/User")



const addFavorites = async(req,res)=>{

    const { userId, id, type, title, poster_path } = req.body;

    try {
        const findUser = await User.findById(userId);

        if(!findUser){
            return res.status(400).json({message:"user not found"})
        }

        const isFavorite = findUser.favorites.some(fav => fav.id === id && fav.type === type);

        if (isFavorite) {
            return res.status(400).json({ message: 'Already in favorites' });
          }

          findUser.favorites.push({ id, type, title, poster_path });
    await findUser.save();

    res.status(200).json({ message: 'Added to favorites', favorites: findUser.favorites });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }

}

module.exports ={
    addFavorites,
}