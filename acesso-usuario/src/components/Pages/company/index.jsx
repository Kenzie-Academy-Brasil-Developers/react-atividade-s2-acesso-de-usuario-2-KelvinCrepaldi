import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Company = ({ members }) => {
  const params = useParams();
  const member = members.find((e) => e.id === params.id);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Company;
