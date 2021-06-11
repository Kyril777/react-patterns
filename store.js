import React, { Component } from 'react';
 
class AcademicSpecialty extends Component {
   constructor(props) {
       super(props);
       this.state = {
           loading: true,
           professor: {
               name: "Dan Shannon",
               rank: "Full",
               degree: "PhD"
           },
           specialty: {
               study: "Computer Science",
               discipline: "Artificial Intelligence",
               specialty: "Medical Imaging"
           }
       }
   }
   render() {
       return (
           <>
           <Specialty specialty={this.state.study} />
           <Professor professor={this.state.professor} />
           </>
       );
   }
}
 
export default AcademicSpecialty;
