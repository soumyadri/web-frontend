import React, { useState } from 'react';
import { Header } from '../../Common/Header/Header';
import { ExamPage } from '../../components/ExamPage/ExamPage';
import { ResultBoard } from '../../components/ResultBoard/ResultBoard';

export const ExamDashboard = () => {
    const [result, setResult] = useState({});
    const [examResultStatus, setExamResultStatus] = useState(false);
    const [answerSheet, setAnswerSheet] = useState({});
    return (
        <div>
            <Header />
            {!examResultStatus ? (
                <ExamPage result={result} setResult={setResult} setExamResultStatus={setExamResultStatus} answerSheet={answerSheet} setAnswerSheet={setAnswerSheet} />
            ) : (
                <ResultBoard result={result} answerSheet={answerSheet} />
            )}
        </div>
    )
};