"use client";
import { ResultComp } from "@/components/assessment/result";
import Success from "@/components/assessment/success";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

function Result() {
  const params = useParams();
  const id = params?.id as string;
  const [showResult, setShowResult] = useState(false);
  const [statistics, setStatistics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(statistics)
  // Fetch statistics from API
  useEffect(() => {
    const fetchStatistics = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        
        if (!apiUrl) {
          throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
        }

        const response = await fetch(`${apiUrl}/statistics/${id}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch statistics: ${response.statusText}`);
        }

        const statisticsData = await response.json();
        setStatistics(statisticsData);
        console.log("Statistics data:", statisticsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load statistics");
        console.error("Error fetching statistics:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-13.5 pb-20 w-full max-w-5xl mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#101828] mb-4">Loading results...</div>
          <div className="text-[#344054]">Please wait while we load your assessment results.</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-13.5 pb-20 w-full max-w-5xl mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-4">Error loading results</div>
          <div className="text-[#344054]">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-13.5 pb-20 w-full max-w-5xl mx-auto px-4">
      {showResult ? <ResultComp statistics={statistics} /> : <Success setShowResult={setShowResult} />}
    </div>
  );
}

export default Result;
