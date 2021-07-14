import { useRouter } from "next/router"
import Navbar from "../components/Navbar"
import styles from "../../styles/Home.module.css"
import Image from 'next/image'

const Agent = () => {
    const router = useRouter()
    console.log(router.query)
    const {item} = router.query
    const itemObj = JSON.parse(item)
    console.log(JSON.parse(item))
    return (
        <>
        <div className={styles.container}>
        <div className={`${styles.card}`}>
            <h1>{itemObj.displayName}</h1>
            <img src={itemObj.fullPortrait} width='50%'
        height='50%' style={{alignItems: 'center'}}></img>
            <p>{itemObj.description}</p>
        </div>
        </div>
        </>
    )
}

export default Agent
