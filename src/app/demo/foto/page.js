import ImageBanner from "@/app/components/mainBanner/ImageBanner/ImageBanner"
import WhatsappBanner from "@/app/components/whatsappCallAction/WhatsappBanner/WhatsappBanner"
import TextSectionImage from "@/app/components/textSection/TextSectionImage/TextSectionImage"
import FullImageCallAction from "@/app/components/imageSection/FullImageCallAction/FullImageCallAction"
import OnlyTextCallAction from "@/app/components/aboutMeHomeSection/OnlyTextCallAction/OnlyTextCallAction"

export default function FotoDemo() {
    return (
        <>
            <ImageBanner />
            <WhatsappBanner />
            <OnlyTextCallAction />
            <TextSectionImage />
            <FullImageCallAction image={"/images/demo/demo1-5.jpg"} title={"Colección Periodismo"} />
            <FullImageCallAction image={"/images/demo/demo1-6.jpg"} title={"Colección Retratos"} />
            <FullImageCallAction image={"/images/demo/demo1-7.jpg"} title={"Colección Ciudades"} />
            <FullImageCallAction image={"/images/demo/demo1-8.jpg"} title={"Colección Foodporn"} />
        </>
    )
}