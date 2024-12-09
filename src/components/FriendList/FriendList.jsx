import frStyles from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendList({ friends }) {
  return (
    <ul className={frStyles["user-list"]}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <div className={frStyles["user-container"]}>
            <img src={friend.avatar} alt={friend.name} width="48" />
            <p
              style={{
                fontWeight: 600,
              }}
            >
              {friend.name}
            </p>
            <p
              style={{
                fontSize: 12,
              }}
              className={clsx(
                friend.isOnline
                  ? frStyles["status-online"]
                  : frStyles["status-offline"]
              )}
            >
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
