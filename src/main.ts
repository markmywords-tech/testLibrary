import * as canvas from "./canvas";
import * as moodle from "./moodle";
import * as standardiser from "./standardiser";


export function getStudentList(){
    
}

export function getStudentById(){

}

export function getTeacherList(){

}

export function getTeacherById(){

}

export async function getCourseList(lms: string, token: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getCourseList(token);
        // console.log("GetCourseListCanvas", data);
      } catch (error) {
        console.error("Error in GetCourseListCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}
  

export async function getCourseById(lms: string, token: string, courseId: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getCourseById(token, courseId);
        // console.log("GetCourseByIdCanvas", data);
      } catch (error) {
        console.error("Error in GetCourseByIdCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export function getAssignmentList(){

}

export function getAssignmentById(){

}

export function getRubricList(){

}

export function getRubricById(){

}