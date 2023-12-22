import Movies from "./model/movieSchema.js"

export const  bulkInsert=async(data)=>{
  try{
    await Movies.insertMany(data);
    console.log("Bulk inserted")
  }catch(e){
    console.log("error while inserting in bulk")
  }
   
}