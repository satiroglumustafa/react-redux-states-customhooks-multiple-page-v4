import { useContext } from 'react'
import ApiContext from '../../contexts/ApiContext'
import './Home.css'
import MostLikedProducts from '../../components/MostLikedProducts/MostLikedProducts'

const Home = ()=>{


    const {loading,dataApi} = useContext(ApiContext)


    return(
        <>
        <div className='most-liked-area mb-5'>
            <h2 className='sub-title'>Most Liked</h2>
            <MostLikedProducts loadingDataApi={loading} mostLikedDataApi = {dataApi} />
        </div>
        </>
    )
}

export default Home