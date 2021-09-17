import { Link } from "react-router-dom";
import Create from "../create";

const Home = ({ members, setListMembers }) => {
  return (
    <div>
      <h1>Home:</h1>
      <div>
        <Create members={members} setListMembers={setListMembers} />
      </div>
      <ul className="link-list">
        {members.map((e) =>
          e.type === "pj" ? (
            <li>
              <Link to={`/company/${e.id}`}>{e.name}</Link>
            </li>
          ) : (
            <li>
              <Link to={`/customer/${e.id}`}>{e.name}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Home;
