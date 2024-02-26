import { useState, useEffect } from 'react';
import { onSnapshot, addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, db } from "../../FirebaseConfig";

export default function TextArea({ channel }) {
    const [messages, setMessages] = useState([]);
    const [messageField, setMessageField] = useState("");

    const chat = collection(db, `Chats/${channel.channelId}`, "messages");

    useEffect(() => {
        if (channel) {
            
            const unsubscribe = onSnapshot(chat, (snapshot) => {
                const messagesData = snapshot.docs.map((doc) => doc.data());
                setMessages(messagesData);
            })
            return unsubscribe;
        }
    }, [channel])

    const handleMessageField = (e) => {
        setMessageField(e.target.value)
    }

    const sendMessage = async () => {
        const newMessage = {
            authorProfilePic: "",
            body: messageField,
            createdAt: new Date(),
            messageId: crypto.randomUUID(),
            userId: auth.currentUser.uid
        }

        console.log(newMessage);
        // const messagesRef = collection(newChannelRef, "messages");
        // await addDoc(messagesRef, {
        //   userId: "System",
        //   body: "This is the start of the Channel!",
        //   createdAt: new Date(),
        //   authorProfilePic: "",
        //   messageId: crypto.randomUUID()
        // })



        await addDoc(chat, newMessage);
    }

    const updateMessage = () => {
        
    }

    const deleteDoc = () => {
        
    }

    const messagesElems = messages.map(msg => {
        return <p key={msg.messageId}>{msg.body}</p>
    })

  return (
    <div className="relative dashboard--textbox w-[100%] flex flex-col">
      <div className="w-100 h-8 mt-3 border-b border-blue-900 m-1">
        <p className="ml-7 text-base">{channel.channelName}</p>
      </div>
      <div className="text-area overflow-y-auto">{messagesElems}</div>

            <div className="absolute bottom-0 w-[100%] ">
                <input className="w-[100%]" value={messageField} placeholder="Type your message here" onChange={handleMessageField}/>
                <button onClick={sendMessage}>Send</button>
            </div>
      </div>
  )
}