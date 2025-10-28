import { useSwiper } from "swiper/react";
import { ReactComponent as Prev} from '../../assets/prev.svg'
import { ReactComponent as Next} from '../../assets/next.svg'
import styles from './CarouselNavigation.module.css'

export default function CarouselNavigation() {
    const swiper = useSwiper()

    return (
        <>
            <button className={`prev ${styles.prev}`} onClick={() => swiper.slidePrev()}>
                <Prev />
            </button>
            <button className={`next ${styles.next}`} onClick={() => swiper.slideNext()}>
                <Next />
            </button>
        </>
    )
}