export default function Accordion({ title, isOpen, onClick, children }) {
	return (
		<div className="border-b-2 border-gray-200">
			<button
				onClick={onClick}
				className={`flex ${
					isOpen && "border-b-2"
				} justify-between items-center w-full px-6 py-3 text-left text-md font-medium text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 ${
					isOpen && "text-green-600"
				}`}
			>
				<span>{title}</span>
				<span>
					{isOpen ? (
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
						</svg>
					) : (
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
						</svg>
					)}
				</span>
			</button>
			{isOpen && <div className="px-6 py-4 text-md text-gray-500 font-semibold">{children}</div>}
		</div>
	);
}
