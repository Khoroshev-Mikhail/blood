import React from "react";
import { SenchaGrid, Column } from "@sencha/sencha-grid";
import "@sencha/sencha-grid/dist/themes/grui.css";

export default class App extends React.Component {
  render() {
    const data = [
      {
        name: "Cheesecake Factory",
        sweetsName: "Pie",
        description: "Classic crust and filled with yummy cherries.",
      },
    ];
    return (
      <SenchaGrid data={data}>
        <Column componentType="Column" field="" text="Sweet" width={400}>
          <Column field="sweetsName" text="Sweets" width={100} />
          <Column field="name" text="Pudding" width={150} />
          <Column field="name" text="Cakes" width={150} />
        </Column>
        <Column field="name" text="Name" width={200} />
        <Column field="description" flex={1} text="Description" />
      </SenchaGrid>
    );
  }
}