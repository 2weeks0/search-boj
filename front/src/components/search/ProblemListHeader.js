import PropsTypes from "prop-types";

const propsType = {
  headerList: PropsTypes.array,
  sort: PropsTypes.object,
  onClick: PropsTypes.func,
};

const defaultProps = {
  onClick: () => console.error("ProblemListHeader에 onClick 넘겨주세요"),
};

export default function ProblemListHeader(props) {
  const arrowUp = String.fromCodePoint(0x2b06);
  const arrowDown = String.fromCodePoint(0x2b07);

  return (
    <thead>
      <tr>
        {props.headerList.map((it) => (
          <th className={`col-${it.col}`} key={it.key}>
            <button className="btn p-0" onClick={() => props.onClick(it.key)}>
              <strong>{it.name}</strong>
              {props.sort.key === it.key
                ? props.sort.direction === "asc"
                  ? arrowUp
                  : arrowDown
                : null}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

ProblemListHeader.propsType = propsType;
ProblemListHeader.defaultProps = defaultProps;
