import style from './FullImageCallAction.module.css';
import { montserrat } from '@/app/ui/fonts';

export default function FullImageCallAction({ image, title }) {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={image} alt="Foto" />
            </div>
            <div className={style.title}>
                <p className={`${montserrat.className}`}>{title}</p>
            </div>
        </div>
    )
}