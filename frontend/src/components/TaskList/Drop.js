import {Dropdown, DropdownButton} from "react-bootstrap";
import React from "react";

const StatusFilter = () => {
    return(
        <>
        <style>
            {`
    .btn-flat {
      background-color: transparent;
      color: white;
      border: 0;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
        </style>
        <DropdownButton variant="flat" id="dropdown-basic-button" title="Статус" >
            <Dropdown.Item  href="/protected">Все</Dropdown.Item>
            <Dropdown.Item href="/tasksCompleted">Выполненые</Dropdown.Item>
            <Dropdown.Item href="/tasksProgress">В работе</Dropdown.Item>
        </DropdownButton>
        </>
    )
}

export default StatusFilter