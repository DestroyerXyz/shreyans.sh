import { Hash } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

export const H3 = ({
    children,
    id,
    ...rest
}: {
    children?: React.ReactNode
    id?: string
    rest: React.HTMLProps<HTMLHeadingElement>
}) => {
    return (
        <LinkButton className="no-underline" href={`#${id}`} id={id}>
            <h4
                className="inline-flex items-center text-xl font-semibold underline-offset-4 opacity-80 hover:underline hover:opacity-[1.5] [&>svg]:opacity-0 [&>svg]:hover:opacity-100"
                {...rest}
            >
                {children} <Hash className="transition-opacity" size={18} />
            </h4>
        </LinkButton>
    )
}
