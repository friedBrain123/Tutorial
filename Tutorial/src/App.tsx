import React from "react";
import Modal from "./Comps/Dialog";
import DropDown from "./Comps/DropDown";
import DropDownInternal from "./Comps/DropDownInternal";
import { Button, Dialog, DropdownMenu, Flex, Table,  } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import EditDialog from "./Comps/EditDialog";
export default function App() {

    const items = [{name: "fasdf", age:"fasdf", car: "audi"},{name: "fasdf", age:"fasdf", car: "audi"},{name: "fasdf", age:"fasdf", car: "audi"}]
    return (


        <Table.Root>
            <Table.Header>
                <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>

                {items.map(x => {
                    return (
                        <Table.Row>
                            <Table.RowHeaderCell>{x.name}</Table.RowHeaderCell>
                            <Table.Cell>{x.age}</Table.Cell>
                            <Table.Cell>{x.car}</Table.Cell>
                            <Table.Cell> 
                            <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className="Button violet">Actions</button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                                <DropdownMenu.Group>
                                <DropdownMenu.Label className="DropdownMenuLabel">Items with dialog</DropdownMenu.Label>
                                </DropdownMenu.Group>

                                <DropdownMenu.Separator className="DropdownMenuSeparator" />

                                <DropdownMenu.Group>
                                <DropdownMenu.Label className="DropdownMenuLabel"><EditDialog/></DropdownMenu.Label>
                                <DropdownMenu.Item className="DropdownMenuItem">Duplicate</DropdownMenu.Item>
                                <DropdownMenu.Item className="DropdownMenuItem">Copy</DropdownMenu.Item>
                                <DropdownMenu.Item className="DropdownMenuItem">Save</DropdownMenu.Item>
                                </DropdownMenu.Group>
                            </DropdownMenu.Content>
                            </DropdownMenu.Root>
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table.Root>
    );
}


