import React from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Link } from "react-router-dom";
import "../../tables.css";
export default function MaterialTableDemo() {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const columns = {
    columns: [
      {
        title: "S.No",
        field: "name",

        render: (rowData) => (
          <Link
            to={{ pathname: `/basic-ui/Annovar` }}
            target="_self"
            className="btn btn-link"
            style={{ textDecoration: "none" }}
          >
            {rowData.name}
          </Link>
        ),
      },
      {
        title: "Status",
        field: "status",
        render: (rowData) => {
          return rowData.status === "Pending" ? (
            <p
              style={{
                color: "#E87722",
                fontWeight: "bold",
                paddingTop: "12px",
              }}
            >
              {rowData.status}
            </p>
          ) : rowData.status === "Success" ? (
            <p
              style={{
                color: "#008240",
                fontWeight: "bold",
                paddingTop: "12px",
              }}
            >
              {rowData.status}
            </p>
          ) : (
            <p
              style={{
                color: "#B0B700",
                fontWeight: "bold",
                paddingTop: "12px",
              }}
            >
              {rowData.status}
            </p>
          );
        },
      },
      { title: "Project Name", field: "formate" },
      { title: "Project Source ID", field: "costtype" },
      { title: "Analysis Type", field: "adlistens", type: "costtype" },
    ],
  };

  const data = {
    data: [
      {
        name: "Test Ad",
        status: "Progress",
        formate: "Radio/Podcast",
        costtype: "PPL",
        adlistens: "TO Pipeline",
      },

      {
        name: "ZTest Ad",
        status: "Success",
        formate: "Radio/Podcast",
        costtype: "PPL",
        adlistens: "TO Pipeline",
      },
      {
        name: "ZTest Ad",
        status: "Pending",
        formate: "Radio/Podcast",
        costtype: "PPL",
        adlistens: "TO Pipeline",
      },
      {
        name: "ZTest Ad",
        status: "Pending",
        formate: "Radio/Podcast",
        costtype: "PPL",
        adlistens: "TO Pipeline",
      },
      {
        name: "ZTest Ad",
        status: "Pending",
        formate: "Radio/Podcast",
        costtype: "PPL",
        adlistens: "TO Pipeline",
      },
      {
        name: "ZTest Ad",
        status: "Pending",
        formate: "Radio/Podcast",
        costtype: "PPL",
        adlistens: "TO Pipeline",
      },

      {
        name: "ZTest Ad",
        status: "Pending",
        formate: "Radio/Podcast",
        costtype: "PPL",
        adlistens: "TO Pipeline",
      },

      {
        name: "DTest Ad",
        status: "Pending",
        formate: "Radio/Podcast",
        costtype: "PPL",
        adlistens: 0,
      },
    ],
  };

  return (

    
    <div style={{ maxWidth: "90%", margin: "5vh auto" }}>
       <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-information " style={{ color: "black" }}></i>
            </span>{" "}
            Reports{" "}
          </h3>
          <br/>
          </div>
      <MaterialTable
        
        options={{
          headerStyle:{backgroundColor:'#fec107'},
         
          }}
        title="Reports"
        icons={tableIcons}
        columns={columns.columns}
        data={data.data}

  //  editable={{
  //       onRowAdd: (newData) =>
  //         new Promise((resolve) => {
  //           setTimeout(() => {
  //             resolve();
  //             setState((prevState) => {
  //               const data = [...prevState.data];
  //               data.push(newData);
  //               return { ...prevState, data };
  //             });
  //           }, 600);
  //         }),
  //       onRowUpdate: (newData, oldData) =>
  //         new Promise((resolve) => {
  //           setTimeout(() => {
  //             resolve();
  //             if (oldData) {
  //               setState((prevState) => {
  //                 const data = [...prevState.data];
  //                 data[data.indexOf(oldData)] = newData;
  //                 return { ...prevState, data };
  //               });
  //             }
  //           }, 600);
  //         }),
  //       onRowDelete: (oldData) =>
  //         new Promise((resolve) => {
  //           setTimeout(() => {
  //             resolve();
  //             setState((prevState) => {
  //               const data = [...prevState.data];
  //               data.splice(data.indexOf(oldData), 1);
  //               return { ...prevState, data };
  //             });
  //           }, 600);
  //         }),
  //     }}
      />
    </div>
  );
}
