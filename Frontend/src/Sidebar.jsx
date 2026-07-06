import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import {v1 as uuidv1} from "uuid";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

function Sidebar() {
     const {allThreads, setAllThreads, currThreadId, setNewChat, setPrompt, setReply, setCurrThreadId , setPrevChats, searchQuery, setSearchQuery, sidebarOpen, setSidebarOpen} = useContext(MyContext);

     const getAllThreads = async () => {
        try {
            const response = await fetch(`${API_URL}/api/thread`);
            const res = await response.json();
            const filteredData = res.map(thred => ({threadId: thred.threadId, title: thred.title}));
            // console.log(filteredData);
            setAllThreads(filteredData);
        } catch(err) {
            console.log(err);
        }
     };

     useEffect(() => {
        getAllThreads();
     }, [currThreadId])

     const createNewChat = () => {
        setNewChat(true);
        setPrompt("");
        setReply(null);
        setCurrThreadId(uuidv1());
        setPrevChats([]);
     }

     const changeThread = async (newThreadId) => {
        setCurrThreadId(newThreadId);

        try {
            const response = await fetch(`${API_URL}/api/thread/${newThreadId}`);
            const res = await response.json();
            console.log(res);
            setPrevChats(res);
            setNewChat(false);
            setReply(null);
        } catch(err) {
            console.log(err);
        }
     }

     const deleteThread = async (threadId) => {
        try {
            const response = await fetch(`${API_URL}/api/thread/${threadId}`, { method: "DELETE" });
            const res = await response.json();
            console.log(res);

            //updated threads re-render
            setAllThreads(prev => prev.filter(thread => thread.threadId !== threadId));

            if(threadId === currThreadId) {
                createNewChat();
            }

        } catch(err) {
            console.log(err);
        }
     }

    return (
        <section className={sidebarOpen ? "sidebar" : "sidebar closed"}>
            <div className="topBar">
                <button
                    className="iconBtn"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <i className={`fa-solid ${sidebarOpen ? "fa-bars-staggered" : "fa-bars"}`}></i>
                </button>

                {sidebarOpen && (
                    <button
                        onClick={createNewChat}
                        className="iconBtn"
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                )}
            </div>

            {sidebarOpen && (
            <div className="searchBox">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder="Search chats..."
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
            </div>
            )}

            {sidebarOpen && <p className="historyTitle">Recents</p>}
            {sidebarOpen && (
            <ul className="history">
                {
                    allThreads?.filter(thread => thread.title?.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((thread, idx) => (
                        <li key={idx}
                            onClick={(e) => changeThread(thread.threadId)}
                            className={thread.threadId === currThreadId ? "highlighted": " "}
                        >
                            {thread.title}
                            <i className="fa-solid fa-trash"
                                onClick={(e) => {
                                    e.stopPropagation(); // stop event bubbling
                                    deleteThread(thread.threadId);
                                }}
                            ></i>
                        </li>
                    ))
                }
            </ul>
            )}

            {sidebarOpen && (
            <div className="sign">
                <p>By Nakul Nagar &hearts;</p>
            </div>
            )}
        </section>
    )
}
export default Sidebar;