

function Sleep(){
    return new Promise((resolve)=> setTimeout(resolve,1000));
}
const blog = async() => {
     await Sleep();
  return (
    <div>
      <h1>blog</h1>
    </div>
  );
};

export default blog
