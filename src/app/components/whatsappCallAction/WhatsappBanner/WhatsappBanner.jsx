import style from './WhatsappBanner.module.css';
import { montserrat } from '@/app/ui/fonts';
import LinkIcon from '@/app/ui/icons/link';

export default function WhatsappBanner() {
    return (
        <div className={style.container}>
            <a href="#">
                <div className={style.imageContainer}>
                    <img src="/images/demo/demo1-2.jpg" alt="Whatsapp" />
                </div>
                <div className={style.text}>
                    <h3 className={`${montserrat.className}`}>WhatsApp</h3>
                </div>
                <div className={style.icon}>
                    <LinkIcon width={45} height={45} stroke="#d1d1d1" />
                </div>
            </a>
        </div>
    )
}