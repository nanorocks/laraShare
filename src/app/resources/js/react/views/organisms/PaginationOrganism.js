import React from "react";

export default function PaginationOrganism({ setUrlArticles, data }) {
    const handleNewFetch = (url) => setUrlArticles(url);

    if (data !== null && data.total < data.per_page) {
        return null;
    }

    return (
        <div className="container pt-4">
            <nav aria-label="...">
                <ul className="pagination">
                    {data !== null &&
                        data.links.map((link, index) => {
                            return (
                                <li
                                    className={`page-item ${
                                        link.active ? "active" : ""
                                    }
                                    ${link.url === null ? "disabled" : ""}`}
                                    key={index}
                                >
                                    <a
                                        className={`page-link cursor-pointer`}
                                        onClick={() => handleNewFetch(link.url)}
                                    >
                                        {link.label
                                            .replace("&laquo;", "")
                                            .replace("&raquo;", "")}
                                    </a>
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </div>
    );
}
