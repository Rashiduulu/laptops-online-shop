import React, {useState} from "react";
import {sanityClient} from "@/sanity";
import Link from "next/link";
import Product from "@/components/Product";
import {TbSearch, TbArrowRight} from "react-icons/tb";

interface Props {
    product: Product;
}

function SearchBar({onSearch}: { onSearch: (query: string) => Promise<any> }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchTerm(query);
        const results = await onSearch(query);
        setSearchResults(results);
    };

    return (
        <>
            <div className="flex items-center space-x-2 mb-[30px] ">
            <TbSearch className="w-6 h-6"/>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Поиск..."
                className="border-none outline-none text-[24px] "
            />
            </div>
        </>
    );
}

function SearchResults({results}: { results: any[] }) {
    return (
        <div>
            {/*<h4 className="text-gray-600">Найдено по заросу</h4>*/}
            {results.map((result) => (
                <div key={result._id}>
                    <Link href={`/product/${result.slug.current}`}>
                        <div className="flex items-center space-x-1 mb-1">
                        <TbArrowRight/>
                        <h3 className="cursor-pointer">{result.title}</h3>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

function SearchPage() {
    const [results, setResults] = useState([]);

    const searchProducts = async (query: string) => {
        const response = await sanityClient.fetch(
            `*[_type == "product" && title match $query]`,
            {query: `*${query}*`}
        );
        setResults(response);
        return response;
    };

    return (
        <div>
            <SearchBar onSearch={searchProducts}/>
            <SearchResults results={results}/>
        </div>
    );
}

export default SearchPage;