import { SearchForm } from "./_components/search_form";

export default async function Home() {
	return (
		<div className="flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 min-h-screen">
			<SearchForm />
		</div>
	);
}
