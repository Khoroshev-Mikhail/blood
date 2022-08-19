import "@sencha/sencha-grid/dist/themes/grui.css";
import { Grid } from "semantic-ui-react";
import MainTable from "./MainTable";
import SubjectsSearch from "./Subjects";

export default function Main(){
    return (
      <Grid.Column stretched width={15}>
        <Grid>
          <SubjectsSearch />
          <MainTable />
        </Grid>
      </Grid.Column>
    );
}