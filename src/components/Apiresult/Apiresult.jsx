import React, { useContext } from 'react'
import { contextProvider } from '../../context/Context'
import "./Apiresult.css"

const Apiresult = () => {

    // const { apiResult, imageResult, loading, inputApiResult, inputImageResult } = useContext(contextProvider)
    const { apiResult, imageResult, loading } = useContext(contextProvider)

    if (loading) {
        return <h1 style={{ textAlign: "center", margin: "1rem" }}>Loading...</h1>
    }

    return (
        <>
            {
                <h1 style={{ textAlign: "center", margin: "1rem" }}>Result of {imageResult}  </h1>

            }

            {

                <div className='grid-gallery'>
                    {
                        apiResult.map((eachapiResult) => {
                            return (
                                <div key={eachapiResult.id} className="grid-items" >

                                    <a href={eachapiResult.urls.regular} target="_blank" rel="noreferrer"  >
                                        <img src={eachapiResult.urls.thumb} alt="" />
                                    </a>
                                </div>
                            )
                        })

                    }
                </div>
            }

        </>
    )


}

export default Apiresult
