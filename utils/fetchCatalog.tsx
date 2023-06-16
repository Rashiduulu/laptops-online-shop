export const fetchCatalog = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCatalog`
    );

    const data = await response.json();
    const catalogs: Catalog[] = data.catalogs;

    return catalogs;
};

