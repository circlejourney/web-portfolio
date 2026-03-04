export default function Loading() {
  let txt = "";
  setInterval(()=>{
    if(txt.length >= 6) txt = ""
    else txt += ".";
  }, 500);
  return <div className="flex items-center justify-center text-xl uppercase h-screen">
    <span>
    Loading{txt}
    </span>
  </div>
}