import notes from '../notes'
let detail = (details)=>{
  return <div className="note">
    <h1>{details.title}</h1>
    <p>{details.content}</p>
  </div>
}
export default function Note(){
    return <div >
    {notes.map(detail)}
  </div>
}