import style from './OnlyTextCallAction.module.css';
import { montserrat } from '@/app/ui/fonts';
import SmallRightArrow from '@/app/ui/icons/smallRightArrow';

export default function OnlyTextCallAction() {
    return (
        <div className={style.container}>
            <div className={style.text__container}>
                <div>
                    <h2 className={`${montserrat.className}`}>John Doe</h2>
                    <span className={`${montserrat.className}`}>Fotógrafo independiente</span>
                </div>
                <p className={`${montserrat.className}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed ut purus eget felis vehicula aliquam. 
                    <br />
                    Nullam nec elit nec neque lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed ut purus eget felis vehicula aliquam. 
                </p>
                <span>
                    <a href="#">Seguir leyendo</a>
                    <SmallRightArrow stroke="#fff" width="30" height="30" />
                </span>
            </div>
        </div>
    )
}