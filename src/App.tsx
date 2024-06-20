

export default function App() {
  return (
    <div className='h-screen bg-[#101623] text-white flex flex-col'>
      <div className="bg-[#2D3446]">navbar</div>
      <div className="flex justify-between h-screen mt-1">
        <div className="bg-[#1E2433] w-[16%] m-1 rounded">left col</div>
        <div className="w-[61%] flex flex-col justify-between m-1">
          <div className="bg-[#1E2433] h-[60%] mb-1 rounded">middle col upper</div> 
          <div className="bg-[#1E2433] h-[40%] mt-1 rounded">middle col lower</div>
        </div>
        <div className="bg-[#1E2433] w-[23%] m-1 rounded">right col</div>
      </div>
    </div>
  );
}