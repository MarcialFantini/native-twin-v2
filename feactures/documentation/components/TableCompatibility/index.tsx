import { TailwindClass } from "@/data";

export const TableCompatibility = ({ Data }: { Data: TailwindClass[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Propertied</th>
          <th>Native</th>
          <th>Web</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item, index) => {
          return (
            <tr key={index}>
              <td className="font-medium">{item.class}</td>
              <td>{item.native ? "Si" : "No"}</td>
              <td>{item.web ? "Si" : "No"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
