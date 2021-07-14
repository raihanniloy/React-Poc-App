import { useRouter } from "next/router"
import styles from "../../styles/Home.module.css"
import Image from 'next/image'

const Item = () => {
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
            <img src={itemObj.displayicon}></img>
            {itemObj.chromas.map(skin => {
                return(
                <div key={skin.uuid}>
                <h5>{skin.displayName}</h5> 
                <img src={skin.fullRenderc}></img>
                </div>)
            })}
        </div>
        </div>
        </>
    )
}

export default Item
