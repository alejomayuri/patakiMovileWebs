import style from './TextSectionImage.module.css';
import { montserrat, libreBaskerville, lobsterTwo } from '@/app/ui/fonts';

export default function TextSectionImage() {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src="/images/demo/demo1-4.jpg" alt="Imagen" />
            </div>
            <div className={style.text}>
                <p className={`${montserrat.className}`}>
                    Lorem ipsum dolor sit amet, consectetur <span className={`${libreBaskerville.className}`}>adipiscing</span> elit. Nullam ultricies, 
                    nunc non imperdiet <span className={`${lobsterTwo.className}`}>imperdiet</span>, tortor
                </p>
            </div>
        </div>
    )
}