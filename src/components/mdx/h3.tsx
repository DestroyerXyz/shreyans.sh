import { Hash } from "lucide-react"

import { LinkButton } from "@/lib/utils/next"

const H3 = ({
    id,
    children,
    ...rest
}: {
    id?: string
    children?: React.ReactNode
    rest: React.HTMLProps<HTMLHeadingElement>
}) => {
    return (
        <LinkButton className="no-underline" href={`#${id}`}>
            <h4
                className="-ml-1 flex flex-row items-center text-xl font-semibold underline-offset-4 opacity-80 hover:underline hover:opacity-[1.5]"
                {...rest}
            >
                <Hash size={18} /> {children}
            </h4>
        </LinkButton>
    )
}

export default H3
