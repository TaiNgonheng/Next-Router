import { notFound } from "next/navigation";

interface Props{
  params: {id : string}
}

const SpecificCourse = ({params}: Props) => {
  console.log(params.id);
  if(!parseInt(params.id)){
    notFound();
  }
  return (
  <div>
       SpecificCourse {params.id}
    </div>
  )
};

export default SpecificCourse;
 