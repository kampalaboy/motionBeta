"use client";
import React, { useEffect, useState } from "react";

const RssFeed = () => {
  const [feedItems, setFeedItems] = useState([
    // Default items while loading
    {
      id: "loading1",
      title: "Loading Art News",
      description: "Please wait while we fetch the latest art world updates...",
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtNews = async () => {
      try {
        setIsLoading(true);

        // Using News API to fetch art-related news
        // NOTE: In a production app, you would need to call your own backend to protect your API key
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=art+gallery+exhibition&language=en&sortBy=publishedAt&pageSize=10&apiKey=01e9baddb464429187c2bb072fb18143",
          {
            // This is a client component, so we need to use a proxy or backend service in production
            // as API keys shouldn't be exposed in client-side code
            headers: { Accept: "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch art news");
        }

        const data = await response.json();

        // Transform the API response to match our feed item format
        const artNews = data.articles.map((article, index) => ({
          id: index + 1,
          title: article.title || "Art News",
          description:
            article.description || "Latest updates from the art world",
          url: article.url,
          source: article.source?.name || "Art Source",
        }));

        setFeedItems(artNews);
      } catch (err) {
        console.error("Error fetching art news:", err);
        setError("Could not load art news");
        // Set fallback content in case of error
        setFeedItems([
          {
            id: 1,
            title: "Contemporary Art Trends",
            description:
              "Exploring the latest movements in contemporary art galleries worldwide.",
          },
          {
            id: 2,
            title: "Art Market Analysis",
            description:
              "Recent auction results show growing interest in emerging artists.",
          },
          {
            id: 3,
            title: "Museum Exhibitions",
            description:
              "Major retrospectives opening this season in top museums.",
          },
          {
            id: 4,
            title: "Digital Art Revolution",
            description:
              "NFTs continue to transform how art is bought, sold and experienced.",
          },
          {
            id: 5,
            title: "Art Conservation News",
            description:
              "New techniques being developed to preserve fragile contemporary artworks.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtNews();

    // Refresh news every 30 minutes
    const intervalId = setInterval(fetchArtNews, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      `@keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }`,
      styleSheet.cssRules.length
    );
    styleSheet.insertRule(
      `.ticker {
        display: inline-block;
        white-space: nowrap;
        animation: scroll 180s linear infinite;
      }`,
      styleSheet.cssRules.length
    );
  }, []);

  return (
    <div className="overflow-hidden bg-gray-800 p-1 h-6 w-full">
      {isLoading ? (
        <div className="text-xs text-white text-center">
          Loading art world news...
        </div>
      ) : error ? (
        <div className="text-xs text-red-300 text-center">{error}</div>
      ) : (
        <div className="ticker-container w-full">
          <div className="ticker">
            {/* First copy of items */}
            {feedItems.map((item) => (
              <div
                key={`first-${item.id}`}
                className="inline-block mx-4 text-xs leading-6 text-white"
              >
                <strong>{item.title}:</strong> {item.description}
                {item.source && (
                  <span className="text-gray-300 ml-1">- {item.source}</span>
                )}
              </div>
            ))}
            {/* Duplicate copy to create continuous effect */}
            {feedItems.map((item) => (
              <div
                key={`second-${item.id}`}
                className="inline-block mx-4 text-xs leading-6 text-white"
              >
                <strong>{item.title}:</strong> {item.description}
                {item.source && (
                  <span className="text-gray-300 ml-1">- {item.source}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RssFeed;
