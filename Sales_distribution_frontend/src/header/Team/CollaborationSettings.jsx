import Coll from './CollaborationSettings.module.css'; // Import the CSS module
import { useContext, useState } from 'react';
import { CollaborationContext } from '../../contexts/CollaborationContext';

const CollaborationSettings = () => {
  const {
    conversations,
    comments,
    tasks,
    files,
    wiki,
    addConversation,
    addComment,
    addTask,
    addFile,
    updateWiki,
  } = useContext(CollaborationContext);

  const [newMessage, setNewMessage] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newTask, setNewTask] = useState('');
  const [newFile, setNewFile] = useState(null);
  const [newWikiContent, setNewWikiContent] = useState('');

  const handleAddConversation = () => {
    if (newMessage) {
      addConversation(newMessage);
      setNewMessage('');
    }
  };

  const handleAddComment = () => {
    if (newComment) {
      addComment(newComment);
      setNewComment('');
    }
  };

  const handleAddTask = () => {
    if (newTask) {
      addTask(newTask);
      setNewTask('');
    }
  };

  const handleAddFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      addFile(file.name);
    }
  };

  const handleUpdateWiki = () => {
    if (newWikiContent) {
      updateWiki(newWikiContent);
      setNewWikiContent('');
    }
  };

  return (
    <div className={Coll['collaboration-settings']}> {/* Apply CSS class */}
      <div className={Coll['team-chat']}> {/* Apply CSS class */}
        <h2>Team Chat</h2>
        <div className={Coll.conversations}> {/* Apply CSS class */}
          {conversations.map((msg, index) => (
            <div key={index} className={Coll.message}> {/* Apply CSS class */}
              {msg}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Start a conversation"
          className={Coll.input} // Apply CSS class
        />
        <button onClick={handleAddConversation} className={Coll.button}> {/* Apply CSS class */}
          Send
        </button>
      </div>

      <div className={Coll.comments}> {/* Apply CSS class */}
        <h2>Comments on Records</h2>
        <div className={Coll['comment-list']}> {/* Apply CSS class */}
          {comments.map((comment, index) => (
            <div key={index} className={Coll.comment}> {/* Apply CSS class */}
              {comment}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className={Coll.input} // Apply CSS class
        />
        <button onClick={handleAddComment} className={Coll.button}> {/* Apply CSS class */}
          Add Comment
        </button>
      </div>

      <div className={Coll.tasks}> {/* Apply CSS class */}
        <h2>Task Assignments</h2>
        <div className={Coll['task-list']}> {/* Apply CSS class */}
          {tasks.map((task, index) => (
            <div key={index} className={Coll.task}> {/* Apply CSS class */}
              {task}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Create a task"
          className={Coll.input} // Apply CSS class
        />
        <button onClick={handleAddTask} className={Coll.button}> {/* Apply CSS class */}
          Assign Task
        </button>
      </div>

      <div className={Coll.files}> {/* Apply CSS class */}
        <h2>File Attachments</h2>
        <div className={Coll['file-list']}> {/* Apply CSS class */}
          {files.map((file, index) => (
            <div key={index} className={Coll.file}> {/* Apply CSS class */}
              {file}
            </div>
          ))}
        </div>
        <input
          type="file"
          onChange={handleAddFile}
          className={Coll['file-input']} // Apply CSS class
        />
      </div>

      <div className={Coll.wiki}> {/* Apply CSS class */}
        <h2>Team Wiki</h2>
        <textarea
          value={wiki}
          readOnly
          placeholder="Team Wiki Content"
          className={Coll.textarea} // Apply CSS class
        />
        <textarea
          value={newWikiContent}
          onChange={(e) => setNewWikiContent(e.target.value)}
          placeholder="Update Wiki Content"
          className={Coll.textarea} // Apply CSS class
        />
        <button onClick={handleUpdateWiki} className={Coll.button}> {/* Apply CSS class */}
          Update Wiki
        </button>
      </div>
    </div>
  );
};

export default CollaborationSettings;