import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from "react-router-dom";
import axios, { post } from 'axios';
import logo2 from "../../assets/images/dashboard/circle.svg";
import logo3 from "../../assets/images/dashboard/circle.svg";
import { Form } from "react-bootstrap";

const Dashboard = () => {
  
  let history = useHistory();

  const [project_name, setProject_name] = useState(null)
  const [project_cancer_type, setproject_cancer_type] = useState(null)
  const [project_rerun, setproject_rerun] = useState(null)
  const [biosample_t_file1, setbiosample_t_file1] = useState('')
  const [biosample_t_file2, setbiosample_t_file2] = useState('')
  // const [biosample_t_file3, setbiosample_t_file3] = useState(null)
  // const [biosample_t_file4, setbiosample_t_file4] = useState(null)


  const addPostRequest = async (e) => {
    let formField = new FormData()

  
    formField.append('project_name',project_name)
    formField.append('project_cancer_type',project_cancer_type)
    formField.append('project_rerun',project_rerun)
    formField.append('biosample_t_file1',biosample_t_file1)
    formField.append('biosample_t_file2',biosample_t_file2)
  //   for (let i = 0; i < biosample_t_file.length; i++) {
     

  //     formField.append(`biosample_t_file`, biosample_t_file[i])
  // }
    
    
 

    // if(biosample_t_file1 !== null) {
    //   formField.append('biosample_t_file1', biosample_t_file1)
    // }
    // if(biosample_t_file2 !== null) {
    //   formField.append('biosample_t_file2', biosample_t_file2)
    // }


    await axios({
      method: 'post',
      url:'http://127.0.0.1:8000/api/pipeline-to',
      headers: {"Content-Type": "multipart/form-data",
       "X-CSRFToken": '{{csrf_token}}'
    },
      
      data: formField
    }).then(response=>{
      console.log(response.data);
      
    })
  }
    


  
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span>{" "}
            Dashboard{" "}
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-data active" aria-current="page">
                <span></span>Overview{" "}
                <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
              <Link
                to="/basic-ui/Analysis"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div className="card-body">
                  <img src={logo3} className="card-img-absolute" alt="circle" />
                  <h4 className="font-weight-normal mb-3 text-center">
                    Link To Analysis{" "}
                    <i className="mdi mdi-file-find mdi-36px float-right"></i>
                  </h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div
              className="card card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
              <div className="card-body">
                <img src={logo2} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3 text-center">
                  Link To Reports{" "}
                  <i className="mdi mdi-information mdi-36px float-right"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
              <div className="card-body">
                <img src={logo3} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3 text-center">
                  Link To Patient Portal{" "}
                  <i className="mdi mdi-seat-individual-suite mdi-36px float-right"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
          <div>
        <div className="page-header">
          <h3 className="page-projectName"> Adding BioSample Form </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}></a>
              </li>
            </ol>
          </nav>
        </div>

        <div className=" col-11 grid-margin stretch-card-1 ">
          <div className="card">
            <div className="card-body">
              
                
                <Form.Group>
                  <label htmlFor="projectname">project_name</label>

                  <Form.Control
                   value={project_name} name="project_name" 
                   onChange={(e) => setProject_name(e.target.value)}
                   type="text"





                   
                    id="projectname"
                    placeholder="project_name"
                    size="lg"
                   
                  
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="projectcancertype">project_cancer_type</label>
                  <Form.Control
                    type="text"
                    id="projectcancertype"
                    placeholder="BioSample Type"
                    size="lg"
                    defaultValue="Solid Tumor, Metastatic Cancer"
                    value={project_cancer_type} name="project_cancer_type" 
                    onChange={(e) => setproject_cancer_type(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="project_rerun">project_rerun</label>
                  <input
                    type="text"
                    className="form-control"
                    id="project_rerun"
                    placeholder="BioSample Name"
                    value={project_rerun} name="project_rerun" 
                    onChange={(e) => setproject_rerun(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <label id="biosample_t_file1">biosample_t_file1</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="BioSample Path"
                    id="biosample_t_file1"
                    
                   onChange={(e) => setbiosample_t_file1(e.target.files[0])}
                   
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="biosample_t_file2">biosample_t_file2</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="BioSample Path"
                    id="biosample_t_file2"
                    
                    onChange={(e) => setbiosample_t_file2(e.target.files[0])}
                    required
                  />
                </Form.Group>
                {/* <Form.Group>
                  <label id="biosample_t_file3">biosample_t_file3</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="BioSample Path"
                    id="biosample_t_file3"
                    value={biosample_t_file3} name="biosample_t_file3" 
                    onChange={(e) => setbiosample_t_file3(e.target.value)}
                    
                  />
                </Form.Group> */}
                {/* <Form.Group>
                  <label id="biosample_t_file4">biosample_t_file4</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="BioSample Path"
                    id="biosample_t_file4"
                    value={biosample_t_file4} name="biosample_t_file4" 
                    onChange={(e) => setbiosample_t_file4(e.target.value)}
                    
                  />
                </Form.Group>
                 */}
                
                {/* <FormControl
                  name="project_id"
                  componentClass="select"
                  onChange={this.on}
                >
                  {userlist.map((r, i) => (
                    <option key={i} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </FormControl> */}
                

                <div className="col text-center">
                  <button
                    type="submit"
                    onClick={addPostRequest} 
                    className="btn  mr-2 btn-sm"
                    style={{ backgroundColor: "#fec107" }}
                  >
                    Submit
                  </button>
                </div>
              
              <div className="border border-light p-3 mb-4">
                <div className="text-center">
                  <span>
                    <Link to="/basic-ui/Basespace">
                      <button className="btn btn-light btn-sm"> Cancel</button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    );
  
              }

export default Dashboard;