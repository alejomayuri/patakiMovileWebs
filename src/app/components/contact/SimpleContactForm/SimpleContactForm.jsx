import style from './SimpleContactForm.module.css';
import { montserrat } from '@/app/ui/fonts';

export default function SimpleContactForm() {
    return (
        <div className={style.container}>
            <div className={style.form__container}>
                <h3 className={`${montserrat.className}`}>¿Más información? Escríbeme</h3>
                <form>
                    <div>
                        <label className={`${montserrat.className}`}>Nombre</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label className={`${montserrat.className}`}>Correo</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label className={`${montserrat.className}`}>Mensaje</label>
                        <textarea />
                    </div>
                    <button className={`${montserrat.className}`}>Enviar</button>
                </form>
            </div>
        </div>
    )
}