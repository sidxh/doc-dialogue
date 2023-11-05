import { cn } from '@/lib/utlis'

const MaxWidthWrapper = ({
    classname,
    children
} : {
    classname?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn('mx-auto w-full max-w-xl px-2.5 md:px-20', classname)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;