import React from 'react';
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";


const CourseDescription = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();
    useEffect(() => {
        fetchCourse(params.id);
      }, []);
  return (
   <>
     {course && (<div className="course-description">
         <div className="course-header">
            <img src={`${server}/${course.image}`} alt="" className="course-image"/>
            <div className="course-info">
                <h2>{course.title}</h2>
                <p>Instructor:{course.CreatedBy}</p>
                <p>Duration:{course.duration}</p>
            </div>
            {
                user && user.subscription.includes(course._id) 
                (<button onClick={()=>navigate(~`/course/study/${course._id}`)} className="common-btn">Study</button>)}
            
         </div>
         </div>
        )}
   </>
  )
}

export default CourseDescription;
