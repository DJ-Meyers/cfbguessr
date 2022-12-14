import React from "react";
import { QuizResultsCard } from "./QuizResultsCard";
import { QuizResultsActions } from "./QuizResultsActions";
import { QuizResultsPreheader } from "./QuizResultsPreheader";

export const QuizResults = () => {
    return (
        <div className="w-full">
            <QuizResultsPreheader />
            <QuizResultsCard />
            <QuizResultsActions />
        </div>
    )
}