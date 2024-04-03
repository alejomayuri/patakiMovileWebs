import style from './ImageBanner.module.css';
import { montserrat } from '@/app/ui/fonts';

export default function ImageBanner() {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src="/images/demo/demo1-1.jpg" alt="Foto" />
            </div>
            <div className={style.textAndSocialContainer}>
                <h1 className={`${montserrat.className}`}>John Doe</h1>
                <p>@johndoeworld</p>
                <div>
                    <span>
                        <a href="#">
                            <img src="/images/logos/Instagram.png" alt="Instagram" />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <img src="/images/logos/TikTok.png" alt="TikTok" />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <img src="/images/logos/Twitter.png" alt="X" />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <img src="/images/logos/YouTube.png" alt="YouTube" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}