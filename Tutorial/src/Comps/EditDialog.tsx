import React from 'react'
import { Button, Dialog } from '@radix-ui/themes'

export default function EditDialog() {
  return (
    <Dialog.Root>
    <Dialog.Trigger>
        <Button>Edit profile</Button>
    </Dialog.Trigger>

    <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
        Make changes to your profile.
        </Dialog.Description>

        <Dialog.Close>
            <Button variant="soft" color="gray">
            Cancel
            </Button>
        </Dialog.Close>
        <Dialog.Close>
            <Button>Save</Button>
        </Dialog.Close>
    </Dialog.Content>
    </Dialog.Root>
  )
}
