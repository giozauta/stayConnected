import QuestionContainer from "./components/question-container";

const QuestionPage = () => {
  return (
    <div className="allQuestionsBox flex flex-col gap-10 overflow-y-scroll pr-20 w-[70%] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 dark:scrollbar-thumb-blue-700 dark:scrollbar-track-gray-800 rounded-lg ">
      <QuestionContainer />
      <QuestionContainer />
      <QuestionContainer />
    </div>
  );
};

export default QuestionPage;
