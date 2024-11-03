import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavoriteCoffee = () => {
    const all = localStorage.getItem("favorite");  
    if(all){
        // console.log(JSON.parse(all)) ;
        return JSON.parse(all);
    } else{
        // console.log([]);
        return [];
    }
}

// add a coffee to local storage
 const addFavorite = (coffee) => { 
    let favorite = getAllFavoriteCoffee() 

    // check is exist
    const isExist = favorite.find(item => item.id === coffee.id);
    if(isExist) return toast.error(`${coffee.name} Already Exist`) 


    favorite.push(coffee)
     
    // set to local storage
    localStorage.setItem("favorite", JSON.stringify(favorite))  
    toast.success("Added Successfully")
}


// remove a coffee from local storage
const removeFavorite = (id) => {
    // get all previously saved coffee data
    const savedFavoritesData = getAllFavoriteCoffee();

    const remainedFavorites = savedFavoritesData.filter(item => item.id !== id);
    // set to local storage
    localStorage.setItem("favorite", JSON.stringify(remainedFavorites))  
    toast.success("Successfully Deleted!")
}




export {addFavorite, getAllFavoriteCoffee, removeFavorite} 