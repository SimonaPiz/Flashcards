import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch} from 'react-redux';

import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicsSlice";

export default function NewTopicForm() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  //const topics = useSelector(selectTopics);
  //let getInitialId = topics.length;
  //const [topicNewId, setTopicNewId] = useState(getInitialId);
  
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    //setTopicNewId(topicNewId + 1);

    // dispatch your add topic action here
    dispatch(addTopic({
      id: uuidv4(),
      name: name,
      icon: icon,
    }));
    history.push(ROUTES.topicsRoute());
  };

  return (
    <section>
      <form onSubmit={handleSubmit} name="newTopic">
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
            name="select-topic-icon"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url} name={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center">Add Topic</button>
      </form>
    </section>
  );
}
