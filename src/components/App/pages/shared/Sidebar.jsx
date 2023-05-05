import React from "react";
import { Accordion, AccordionItem } from "../../../Common/Accordion/Accordion";

const sidebarStyle = {
  gridArea: "sidebar",
  backgroundColor: "#333",
  color: "#fff",
  padding: "1rem",
};

const Sidebar = () => {
  return (
    <aside style={sidebarStyle}>
      Sidebar
      <Accordion theme="dark" initialIndex={1}>
        <AccordionItem title="Management">
          <ul>
            <li>Customers</li>
            <li>Products</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="CMS setup">
          <p>
            Content 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Expedita, laborum.
          </p>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default Sidebar;
