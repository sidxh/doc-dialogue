'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogContent } from './ui/dialog'


const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <Dialog
            open={isOpen}
            onOpenChange={(v) => {
                if (!v) {
                    setIsOpen(v)
                }
            }}>
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>
            <DialogContent>
                Hey Dialogbox
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton;