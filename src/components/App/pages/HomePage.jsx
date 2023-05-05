import React from "react";
import EditButton from "../../Common/Buttons/EditButton";
import DeleteButton from "../../Common/Buttons/DeleteButton";

const customers = [
  {
    id: 1,
    name: "Timi Adenuga",
    email: "timi@test.com",
    phone: "08012345678",
    since: "01/01/2021",
    total: "₦ 100,000",
  },
  {
    id: 2,
    name: "Timi Adenuga",
    email: "timi@test.com",
    phone: "08012345678",
    since: "01/01/2021",
    total: "₦ 100,000",
  },
  {
    id: 3,
    name: "Timi Adenuga",
    email: "timi@test.com",
    phone: "08012345678",
    since: "01/01/2021",
    total: "₦ 100,000",
  },
];

const CustomerTable = ({lined, odd, even}) => {
  return (
    <table style={tableStyle}>
      <thead>
        <tr style={tableHeadStyle}>
          <th style={cellStyle}>S/N</th>
          <th style={cellStyle}>Customer Name</th>
          <th style={cellStyle}>Customer Email</th>
          <th style={cellStyle}>Customer Phone</th>
          <th style={cellStyle}>Customer Since</th>
          <th style={cellStyle}>Order Total</th>
          <th style={cellStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={customer.id} style={(lined && index % 2 !== 0) ? darkerStyle : rowStyle} >
            <td style={cellStyle}>{customer.id}</td>
            <td style={cellStyle}>{customer.name}</td>
            <td style={cellStyle}>{customer.email}</td>
            <td style={cellStyle}>{customer.phone}</td>
            <td style={cellStyle}>{customer.since}</td>
            <td style={cellStyle}>{customer.total}</td>
            <td style={cellStyle}>
              <EditButton size="sm" />
              {" "}
              <DeleteButton  size="sm" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const HomePage = () => {
  return <div>
    <CustomerTable lined={true}/>
  </div>;
};

export default HomePage;

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "#fff",
  textAlign: "left",
  fontSize: "0.9rem",
  color: "#333",
  fontFamily: "sans-serif",
  lineHeight: "1.5rem",
  padding: "0.5rem",
  borderRadius: "0.65rem",
  overflow: "hidden",
  boxShadow: "0 0 0.5rem #333",
};

const tableHeadStyle = {
  backgroundColor: "#004389",
  color: "#ffffff",
  textAlign: "left",
};

const rowStyle = {
  borderBottom: "1px solid #ddd",
};


const cellStyle = {
  padding: "0.7rem",
};

const darkerStyle = {
  ...rowStyle,
  backgroundColor: "#eeeeee",
}
