const SkeletonObject: React.FC<{ type: 'track' | 'album' | 'trackRecently'; ranking?: boolean }> = ({ type, ranking }) => {
	if (type == 'trackRecently') {
		return (
			<div className='grid grid-cols-[6fr_1fr] items-center justify-between gap-2 rounded py-2 lg:grid-cols-[7fr_2fr_1fr]'>
				<div className='flex items-center gap-4'>
					<div className='skeleton h-[50px] w-[50px]'></div>
					<div>
						<h3 className='skeleton'>Lorem, ipsum.</h3>
						<div className='flex flex-wrap items-center gap-1'>
							<div>
								<a className='skeleton text-sm text-gray-300 hover:underline'>Lorem, ipsum.</a>
							</div>
						</div>
					</div>
				</div>
				<div className='hidden lg:flex'>
					<span className='skeleton'>Lorem, ipsum.</span>
				</div>
				<div className='flex justify-end'>
					<span className='skeleton'>4:20</span>
				</div>
			</div>
		);
	}

	return (
		<div className={`grid grid-cols-[${ranking ? '1.25rem_' : ''}6fr_1fr] items-center justify-between gap-4 rounded py-2`}>
			{ranking && <div className='skeleton flex w-5 justify-center'>1</div>}
			<div className='flex items-center gap-4'>
				<div className='skeleton h-[50px] w-[50px]'></div>
				<div>
					<h3 className='skeleton'>Lorem, ipsum.</h3>
					{type === 'track' && (
						<div className='flex flex-wrap items-center gap-1'>
							<div>
								<a className='skeleton text-sm text-gray-300 hover:underline'>Lorem, ipsum.</a>
							</div>
						</div>
					)}
				</div>
			</div>
			{type === 'track' && (
				<div className='flex justify-end'>
					<span className='skeleton'>4:20</span>
				</div>
			)}
		</div>
	);
};

export const SkeletonObjectDynamic: React.FC<{ count: number; type: 'track' | 'album' | 'trackRecently'; ranking?: boolean }> = ({ count, type, ranking }) => {
	const skeletonCards: JSX.Element[] = [];

	for (let i = 0; i < count; i++) {
		skeletonCards.push(<SkeletonObject type={type} ranking={ranking} key={i} />);
	}

	return <>{skeletonCards}</>;
};
