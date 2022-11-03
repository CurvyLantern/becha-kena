const ResizeBox = ({ children }: { children: React.ReactNode }) => {
	return <div className='overflow-hidden resize-x'>{children}</div>;
};

export default ResizeBox;
