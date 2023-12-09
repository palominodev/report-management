export const FormLayout = ({children}:{children: React.ReactNode}) => {
	const onSubmit = (e: React.FormEvent<HTMLElement>) => {
		e.target
	}
	return (
		<form onSubmit={ onSubmit } className="bg-slate-800 p-3 m-3 text-white font-bold">
			{children}
		</form>
	)
}