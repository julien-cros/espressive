export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4 static">
		<div className='border-dashed border-[1px] border-black w-2/3 h-[600px] p10'>

			<div className='w-full h-[120px] flex items-center border-dashed border-b-[1px] border-black '>
				<p className='text-9xl font-black tracking-[-0.4rem]'>The</p>
			</div>
			<div className='w-full h-[120px] flex items-center border-dashed border-b-[1px] border-black'>
				<p className='text-2xl font-normal p-10 '>The perfet espresso</p>
			</div>
			<div className='w-full h-[120px] flex items-center justify-end border-dashed border-b-[1px] border-black'>
				<p className='text-right text-9xl font-black tracking-[-0.4rem] pr-2'>Espresso</p>
			</div>
			<div className='w-full h-[120px] flex items-center justify-end border-dashed border-b-[1px] border-black '>
				<p className='text-2xl font-normal p-10'>Choose a grinder</p>
			</div>
			<div className='w-full h-[120px]'>
				<p className='text-9xl flex items-center font-black tracking-[-0.4rem]'>Universe</p>
			</div>
			
		</div>
    </main>
  )
}
