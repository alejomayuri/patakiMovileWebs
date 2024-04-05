import style from './SectionTitle.module.css';
import { montserrat } from '@/app/ui/fonts';

export default function SectionTitle() {
    return (
        <div className={style.container}>
            <div className={style.text__container}>
                <h2 className={`${montserrat.className}`}>Colecciones</h2>
            </div>
        </div>
    )
}