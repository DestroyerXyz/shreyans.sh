import Image from "next/image"

import "./img.css"

type ImgProps = {
    alt?: string
    rest: React.HTMLProps<HTMLImageElement>
    src?: string
}

export const Img = ({ alt, src, ...rest }: ImgProps) => {
    if (!src) return null
    return (
        <Image
            {...rest}
            alt={alt ?? "No alt provided"}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="image mx-auto my-2 aspect-auto max-h-[50vh]"
            fill={true}
            src={src}
        />
    )
}
