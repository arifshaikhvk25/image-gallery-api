import React, { useState, createContext } from 'react'

export const contextProvider = createContext();

const Context = ({ children }) => {

  const [search, setSearch] = useState("React")
  const [apiResult, setApiResult] = useState([])
  const [imageResult, setImageResult] = useState("")      // this will show the heading for the image which is searched
  const [loading, setLoading] = useState(true)

  const [searchInput, setSearchInput] = useState("")

  const handelChange = (e) => {
    setSearch(e.target.value)
  }

  const handelChangeInput = (e) => {
    setSearchInput(e.target.value)
  }

  const client_id = process.env.REACT_APP_CLIENT_ID;

  // const result = () => {
  //     fetch(`https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${search}`)
  //         .then((response) => { return (response.json()) })
  //         .then((data) => {
  //             console.log(data)
  //             setApiResult(data.results)
  //         })
  //         .catch((error) => console.log(error))
  //     setSearch("")
  // }

  const result = async () => {
    try {

      const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${search}`)
      setLoading(false)
      const responseResolved = await response.json()
      setApiResult(responseResolved.results)
      setSearch("")
      setImageResult(search)       // this state for heading of searched image

    } catch (error) {
      setLoading(false)
      console.log("Something Wrong", error)
    }

  }

  const enter = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${search}`)
      const responseResolved = await response.json()
      // .catch((error) => console.log(error, "sorry error "))
      setApiResult(responseResolved.results)
      setSearch("")
      setImageResult(search)           // this state for heading of searched image
    }
  }
  // console.log(apiResult);          // to check the data which we getting from api

  const enterInput = async (e) => {
    try {

      if (e.key === "Enter") {
        const inputResponse = await fetch(`https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${searchInput}`);
        const inputResponseResolved = await inputResponse.json();
        // console.log(inputResponseResolved);
        setApiResult(inputResponseResolved.results)
        setSearchInput("")
        setImageResult(searchInput)
      }

    } catch (error) {
      console.log("error ocuured", error);
    }
  }

  return (
    <contextProvider.Provider value={{ search, setSearch, apiResult, setApiResult, enter, result, handelChange, imageResult, setImageResult, loading, enterInput, handelChangeInput, searchInput, setSearchInput }}>
      {children}
    </contextProvider.Provider>
  )
}

export default Context
