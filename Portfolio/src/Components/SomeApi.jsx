import React, {useState, useEffect} from 'react'

const SomeApi = () => {
    //UseState (Updating initial state with setState)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); //Indicate that API is being fetch
    const [error, setError] = useState(null);
    //
    useEffect(() => {
        const fetchApiData = async () =>{
            try{
                const response = await fetch('https://api.github.com/repos/SeannieLim/WebPortfolio/commits');
                if(!response.ok){
                    throw new Error(`HTTP error, status ${response.status}`);
                }
                let postsData = await response.json();
                setData(postsData);
                console.log(data);
                setError(null);
            } catch (err){
                setError(err.message);
                setData(null);
            }finally{
                setLoading(false); //Can't fetech API 
            }
        }
        //Call function for execution
        fetchApiData();
    },[]); //Effect runs once, if the dependancies haven'ts changed since last render, the effect won't run again


  //Learning about mapping (Changing to object before accessing the data )
  function displayData(){
    data.map((object) => {
        console.log(object.commit.message);
       })
  } 

    displayData();

  return (
    <>
    <p>Hello</p>
    </>
  )
}

export default SomeApi
