"use client"
const course_data =[
  {name: "Next.js", hours: 7},
  {name: "python.js", hours: 7},
  {name: "java.js", hours: 7},

];
const course = () => {
  function onSubmit(){
    console.log("Hello world")
  }
  return (
    <div>
      <h1>All course</h1>
      {
        course_data.map((course)=>(
          <h2 key={course.name}>{course.name}</h2>
        ))}

        <form onSubmit={onSubmit}>
          <input type="text" name="name" className="border" />
          <button type="submit"> submit</button>
        </form>
    </div>
  )
}
  
export default course
