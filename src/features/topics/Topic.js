import NewTopicForm from "../../components/NewTopicForm";
import { Link, useParams } from "react-router-dom";
import {useSelector} from 'react-redux';

import ROUTES from "../../app/routes";
import { selectTopics } from "./topicsSlice";
import { selectQuizzes } from "../quizzes/quizzesSlice";

export default function Topic() {
  const topics = useSelector(selectTopics); // replace this with a call to your selector to select all the topics in state
  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to select all the quizzes in state
  let { topicId } = useParams();
  const topic = topics[topicId];

  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);
  console.log(quizzesForTopic);
  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        { quizzesForTopic.map((quiz) => {
          <li className="quiz" key={quiz.quizId}>
            <Link to={ROUTES.quizRoute(quiz.quizId)}>{quiz.name}</Link>
          </li>
        })}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
